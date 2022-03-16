import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

import styles from './styles';
import Text from 'components/Text';
import {wp, hp} from 'utils/Constants';
import Colors from 'utils/Colors';
import Button from 'components/Button';

const Home = () => {
  const [scale, setScale] = useState<number>(0.8);
  return (
    <ScrollView style={styles.container}>
      <Text>SELECT PHOTOS</Text>
      <View
        style={{
          borderWidth: 0.2,
          borderColor: Colors.gray,
          padding: wp(4),
          backgroundColor: Colors.white,
        }}>
        <Text>Step 1: Front Side Photo</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            height: hp(30),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
          }}>
          <Icon name="image" color={Colors.gray} size={wp(12)} />
          <Text color={Colors.gray}>
            Click to select a photo of the front side.
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginVertical: 16}}>
          <Text>Scale ( {`${scale.toFixed(1)}x`} )</Text>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Slider
              value={scale}
              minimumValue={0.5}
              maximumValue={1.2}
              onValueChange={value => setScale(value)}
              minimumTrackTintColor={Colors.primary}
              thumbTintColor={Colors.primary}
              maximumTrackTintColor={Colors.gray}
            />
          </View>
        </View>
        <Button title="Rotate 90°" />
      </View>
    </ScrollView>
  );
};

export default Home;
