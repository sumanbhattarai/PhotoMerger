import React, {useContext} from 'react';
import {View, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import styles from './styles';
import Text from 'components/Text';
import Colors from 'utils/Colors';
import Button from 'components/Button';
import {RootStackParamList} from 'navigators/utils';
import {AppContext} from 'providers/AppProvider';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Introduction'>;
}

const Introduction = ({navigation}: Props) => {
  const {updateAppFirstRun} = useContext(AppContext);

  const handleClick = () => {
    // first update the async storage then after navigate.
    updateAppFirstRun().then(() => navigation.navigate('Home'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image
          source={require('assets/images/app-logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text type="bold" color={Colors.primary} textAlign="center">
          Photo Merger
        </Text>
        <Text type="regular" style={styles.desc}>
          Effortlessly merge two photos into a single image with our convenient
          tool. Perfect for combining front and back sides of important
          documents like citizenship or driver's licenses.
        </Text>
        <Text type="regular" style={styles.desc}>
          Simplify the process and save time today!
        </Text>
        <Text type="light" color={Colors.gray} style={styles.desc}>
          Note: We donot retain or store your photos.
        </Text>
      </View>
      <View style={styles.bottomView}>
        <Button
          title="Get Started"
          style={styles.button}
          onPress={handleClick}
        />
      </View>
    </View>
  );
};

export default Introduction;
