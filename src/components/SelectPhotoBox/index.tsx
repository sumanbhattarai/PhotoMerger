import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

import styles from './styles';
import Button from 'components/Button';
import Text from 'components/Text';
import Colors from 'utils/Colors';
import {wp} from 'utils/Constants';
import {AppContext} from 'providers/AppProvider';
import {getAngle} from 'services/Angle';

interface Props {
  step: number;
  title: string;
}

const SelectPhotoBox = ({step, title}: Props) => {
  const {getImageConfig, updateImageConfig} = useContext(AppContext);
  const {angle, scale} = getImageConfig(step);

  return (
    <View style={styles.container}>
      <Text>
        Step {step}: {title}
      </Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.imageView}>
        <Icon name="image" color={Colors.gray} size={wp(12)} />
        <Text color={Colors.gray}>
          Click to select a photo of the front side.
        </Text>
      </TouchableOpacity>
      <View style={styles.scaleView}>
        <Text>Scale ( {`${scale.toFixed(1)}x`} )</Text>
        <View style={styles.sliderView}>
          <Slider
            value={scale}
            minimumValue={0.5}
            maximumValue={1.2}
            onValueChange={value => updateImageConfig(step, {scale: value})}
            minimumTrackTintColor={Colors.primary}
            thumbTintColor={Colors.primary}
            maximumTrackTintColor={Colors.gray}
          />
        </View>
      </View>
      <Button
        title={`Rotate ${getAngle(angle)}°`}
        onPress={() => updateImageConfig(step, {angle: angle + 1})}
      />
    </View>
  );
};

export default SelectPhotoBox;