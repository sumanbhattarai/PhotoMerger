import React, {createRef, useContext, useState} from 'react';
import {View, FlatList} from 'react-native';
import ViewShot, {CaptureOptions} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import RNFS from 'react-native-fs';

import styles from './styles';
import Text from 'components/Text';
import SelectPhotoBox from 'components/SelectPhotoBox';
import Button from 'components/Button';
import {showSuccess, showError} from 'utils/Toast';
import {isAndroid} from 'utils/Constants';
import Picker from 'components/Picker';
import {imageFormats, qualityOptions, selectPhoto} from './utils';
import {hasAndroidPermission} from 'permissions/index';
import ImageView from 'components/ImageView';
import {AppContext} from 'providers/AppProvider';

const Footer = () => {
  const viewRef = createRef<ViewShot>();
  const [saveImageConfig, setSaveImageConfig] = useState<
    Partial<CaptureOptions>
  >({
    quality: 0.5,
    format: 'jpg',
  });
  const {isBothImageSelected} = useContext(AppContext);

  const saveImage = () => {
    if (!isBothImageSelected) {
      showError('Please select both side images.');
      return;
    }
    viewRef.current
      ?.capture?.()
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
            // it saves the image to the gallery.
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
        {selectPhoto.map(({id}) => (
          <ImageView key={id} id={id} src="preview" />
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
          <SelectPhotoBox id={item.id} title={item.title} />
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
