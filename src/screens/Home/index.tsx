import React, {createRef, useContext, useState} from 'react';
import {View, FlatList, Image, PermissionsAndroid} from 'react-native';
import ViewShot, {CaptureOptions} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import RNFS from 'react-native-fs';

import styles from './styles';
import Text from 'components/Text';
import SelectPhotoBox from 'components/SelectPhotoBox';
import Colors from 'utils/Colors';
import {AppContext} from 'providers/AppProvider';
import Button from 'components/Button';
import {showSuccess, showError} from 'utils/Toast';
import {isAndroid} from 'utils/Constants';
import Picker from 'components/Picker';
import {imageFormats, qualityOptions, selectPhoto} from './utils';

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

const EachPhotoView = ({id}: {id: number}) => {
  const {getImageConfig} = useContext(AppContext);
  const {uri, scale, angle} = getImageConfig(id);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.eachSideView, {borderWidth: uri ? 0 : 0.2}]}>
      {uri ? (
        <Image
          source={{uri: uri}}
          style={[
            styles.image,
            {transform: [{scale}, {rotate: `${angle}deg`}]},
          ]}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.textView}>
          <Text color={Colors.gray}>
            {id === 1 ? 'FRONT SIDE' : 'BACK SIDE'}
          </Text>
        </View>
      )}
    </View>
  );
};

const Footer = () => {
  const viewRef = createRef<ViewShot>();
  const [saveImageConfig, setSaveImageConfig] = useState<
    Partial<CaptureOptions>
  >({
    quality: 0.5,
    format: 'jpg',
  });

  const saveImage = () => {
    viewRef.current
      ?.capture()
      .then(async uri => {
        let renamedURI = uri.replace(
          'ReactNative-snapshot-image',
          'Photo-Merger-',
        );
        if (isAndroid && !(await hasAndroidPermission())) {
          return;
        }
        RNFS.copyFile(uri, renamedURI)
          .then(() => {
            CameraRoll.save(renamedURI, {type: 'photo', album: 'Photo Merger'});
          })
          .catch(err => showError(err.message));
        showSuccess('Image has been saved successfully.');
      })
      .catch(error => showError(error.message));
  };
  return (
    <View style={styles.footerView}>
      <Text type="semi-bold">PREVIEW</Text>
      <ViewShot
        style={styles.outputView}
        ref={viewRef}
        options={saveImageConfig}>
        {selectPhoto.map(({step}) => (
          <EachPhotoView key={step} id={step} />
        ))}
      </ViewShot>
      <Text type="semi-bold" style={styles.header}>
        SAVE IMAGE
      </Text>
      <Picker
        items={imageFormats}
        updateValue={val =>
          setSaveImageConfig({...saveImageConfig, format: val})
        }
      />
      <Picker
        items={qualityOptions}
        updateValue={val =>
          setSaveImageConfig({...saveImageConfig, quality: Number(val)})
        }
      />
      <Button title="Save Image" style={styles.button} onPress={saveImage} />
    </View>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={selectPhoto}
        renderItem={({item}) => (
          <SelectPhotoBox step={item.step} title={item.title} />
        )}
        ListHeaderComponent={() => (
          <Text type="semi-bold" style={styles.header}>
            SELECT PHOTOS
          </Text>
        )}
        ListFooterComponent={() => <Footer />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
