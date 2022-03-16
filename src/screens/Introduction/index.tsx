import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>
        Photo ID Merge Tool Merge two photos into a single image. This tool is
        useful to combine the photos of the front and back sides of your
        citizenship, driver's license or similar documents.
      </Text>
    </View>
  );
};

export default Home;
