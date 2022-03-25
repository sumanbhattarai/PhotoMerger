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
  const {uri, angle, scale} = getImageConfig(id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Step {id}: {title}
      </Text>
      <ImageView id={id} src="select" />
      <View style={styles.scaleView}>
        <Text>Scale ( {`${scale.toFixed(1)}x`} )</Text>
        {/* since the package @react-native-community/slider has issue with disabled property, had to disable the touch event by wrapping the slider by a view and setting the pointer-event property to none if no uri is present  */}
        <View style={styles.sliderView} pointerEvents={uri ? 'auto' : 'none'}>
          <Slider
            value={scale}
            minimumValue={0.5}
            maximumValue={1.2}
            onValueChange={value => updateImageConfig(id, {scale: value})}
            minimumTrackTintColor={Colors.primary}
            thumbTintColor={Colors.primary}
            maximumTrackTintColor={Colors.gray}
            // disable property not working
          />
        </View>
      </View>
      <Button
        title={`Rotate ${angle + 90}°`}
        onPress={() =>
          updateImageConfig(id, {angle: angle === 270 ? 0 : angle + 90})
        }
        disabled={!uri}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{opacity: uri ? 1 : 0.7}}
      />
    </View>
  );
};

export default SelectPhotoBox;
