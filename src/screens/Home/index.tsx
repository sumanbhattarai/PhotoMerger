import React, {useContext} from 'react';
import {View, FlatList, Image} from 'react-native';

import styles from './styles';
import Text from 'components/Text';
import SelectPhotoBox from 'components/SelectPhotoBox';
import Colors from 'utils/Colors';
import {AppContext} from 'providers/AppProvider';

type ISelectPhoto = {step: number; title: string};

const selectPhoto: ISelectPhoto[] = [
  {step: 1, title: 'Front Side Photo'},
  {step: 2, title: 'Back Side Photo'},
];

const EachPhotoView = ({id}: {id: number}) => {
  const {getImageConfig} = useContext(AppContext);
  const {uri, scale, angle} = getImageConfig(id);
  return (
    <View style={styles.outputView}>
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
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footerView}>
      <Text>PREVIEW</Text>
      {selectPhoto.map(({step}) => (
        <EachPhotoView key={step} id={step} />
      ))}
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
        ListHeaderComponent={() => <Text>SELECT PHOTOS</Text>}
        ListFooterComponent={() => <Footer />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
