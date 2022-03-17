import React, {createRef, useContext} from 'react';
import {View, FlatList, Image, PermissionsAndroid} from 'react-native';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';

import styles from './styles';
import Text from 'components/Text';
import SelectPhotoBox from 'components/SelectPhotoBox';
import Colors from 'utils/Colors';
import {AppContext} from 'providers/AppProvider';
import Button from 'components/Button';
import {showSuccess, showError} from 'utils/Toast';
import {isAndroid} from 'utils/Constants';
import Picker from 'components/Picker';

type ISelectPhoto = {step: number; title: string};

const selectPhoto: ISelectPhoto[] = [
  {step: 1, title: 'Front Side Photo'},
  {step: 2, title: 'Back Side Photo'},
];

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
            {transform: [{scale}, {rotateX: `${angle}deg`}]},
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
  const saveImage = () => {
    viewRef.current
      ?.capture()
      .then(async uri => {
        console.log('syccesss', uri);
        if (isAndroid && !(await hasAndroidPermission())) {
          return;
        }
        CameraRoll.save(uri, {type: 'photo', album: 'Photo Merger'});
        showSuccess('Image has been saved successfully.');
      })
      .catch(() => {
        console.log('fail');
        showError('Something went wrong!');
      });
  };
  return (
    <View style={styles.footerView}>
      <Text type="semi-bold">PREVIEW</Text>
      <ViewShot
        style={styles.outputView}
        ref={viewRef}
        options={{format: 'jpg', quality: 0.9}}>
        {selectPhoto.map(({step}) => (
          <EachPhotoView key={step} id={step} />
        ))}
      </ViewShot>
      <Text type="semi-bold" style={styles.header}>
        SAVE IMAGE
      </Text>
      <Picker
        items={[
          {label: 'JPEG', value: 'jpg'},
          {label: 'PNG', value: 'png'},
        ]}
      />
      <Picker
        items={[
          {label: 'Good Quality ~150 KB', value: '0.5'},
          {label: 'High Quality ~250 KB', value: '0.8'},
          {label: 'Best Quality ~350 KB', value: '1'},
        ]}
      />
      <Button title="Save Image" style={{marginTop: 16}} onPress={saveImage} />
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
