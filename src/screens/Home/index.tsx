import React from 'react';
import {View, FlatList} from 'react-native';

import styles from './styles';
import Text from 'components/Text';
import SelectPhotoBox from 'components/SelectPhotoBox';
import Colors from 'utils/Colors';

type ISelectPhoto = {step: number; title: string};

const selectPhoto: ISelectPhoto[] = [
  {step: 1, title: 'Front Side Photo'},
  {step: 2, title: 'Back Side Photo'},
];

const Home = () => {
  const Footer = () => {
    return (
      <View style={styles.footerView}>
        <Text>PREVIEW</Text>
        <View style={styles.outputView}>
          <View style={styles.eachSideView}>
            <View style={styles.textView}>
              <Text color={Colors.gray}>FRONT SIDE</Text>
            </View>
          </View>
          <View style={styles.eachSideView}>
            <View style={styles.textView}>
              <Text color={Colors.gray}>Back SIDE</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
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
