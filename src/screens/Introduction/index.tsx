import React from 'react';
import {View, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import styles from './styles';
import Text from 'components/Text';
import Colors from 'utils/Colors';
import Button from 'components/Button';
import {RootStackParamList} from 'navigators/utils';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Introduction'>;
}

const Introduction = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image
          source={require('assets/images/app-logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text type="bold" color={Colors.black}>
          <Text type="bold" color={Colors.primary}>
            Photo ID Merge
          </Text>{' '}
          Tool {'\n'}
        </Text>
        <Text type="regular" color={Colors.gray}>
          Merge two photos into a single image. This tool is useful to combine
          the photos of the front and back sides of your citizenship, driver's
          license or similar documents.
        </Text>
      </View>
      <View style={styles.bottomView}>
        <Button
          title="Get Started"
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};

export default Introduction;
