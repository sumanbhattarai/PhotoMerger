import React, {useContext} from 'react';
import {View} from 'react-native';
import Slider from '@react-native-community/slider';

import styles from './styles';
import Button from 'components/Button';
import Text from 'components/Text';
import Colors from 'utils/Colors';
import {AppContext} from 'providers/AppProvider';
import ImageView from 'components/ImageView';

interface Props {
  id: number;
  title: string;
}

const SelectPhotoBox = ({id, title}: Props) => {
  const {getImageConfig, updateImageConfig} = useContext(AppContext);
  const {angle, scale} = getImageConfig(id);

  return (
    <View style={styles.container}>
      <Text>
        Step {id}: {title}
      </Text>
      <ImageView id={id} src="select" />
      <View style={styles.scaleView}>
        <Text>Scale ( {`${scale.toFixed(1)}x`} )</Text>
        <View style={styles.sliderView}>
          <Slider
            value={scale}
            minimumValue={0.5}
            maximumValue={1.2}
            onValueChange={value => updateImageConfig(id, {scale: value})}
            minimumTrackTintColor={Colors.primary}
            thumbTintColor={Colors.primary}
            maximumTrackTintColor={Colors.gray}
          />
        </View>
      </View>
      <Button
        title={`Rotate ${angle + 90}°`}
        onPress={() =>
          updateImageConfig(id, {angle: angle === 270 ? 0 : angle + 90})
        }
      />
    </View>
  );
};

export default SelectPhotoBox;
