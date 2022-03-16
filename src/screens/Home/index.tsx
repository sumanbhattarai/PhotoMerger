import React from 'react';
import {View, ScrollView} from 'react-native';

import styles from './styles';
import Text from 'components/Text';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>SELECT PHOTOS</Text>
      <View>
        <Text>Step 1: Front Side Photo</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
