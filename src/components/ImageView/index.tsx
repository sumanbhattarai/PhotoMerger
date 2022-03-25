import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  useLayoutEffect,
} from 'react';
import {View, Image, TouchableOpacity, ImageStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import Colors from 'utils/Colors';
import {wp} from 'utils/Constants';
import Text from 'components/Text';
import useImagePicker from 'hooks/useImagePicker';
import {AppContext} from 'providers/AppProvider';

interface Props {
  id: number;
  src: 'preview' | 'select';
}

const ImageView = ({id, src}: Props) => {
  const {getImageConfig, updateImageConfig} = useContext(AppContext);
  const {uri, angle, scale} = getImageConfig(id);
  const {pickedImage, openImageLibrary} = useImagePicker();
  const isPreview: boolean = src === 'preview';
  const [isImageVertical, setIsImageVertical] = useState<boolean>(false);
  const alterDimension = angle % 90 === 1;
  const percetangeBasedOnScale = (scale / 1.2) * 100;

  useLayoutEffect(() => {
    uri &&
      Image.getSize(uri, (width, height) => {
        setIsImageVertical(width / height <= 1);
      });
  }, [uri]);

  useEffect(() => {
    updateImageConfig(id, {uri: pickedImage});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickedImage]);

  const getImageDimension: ImageStyle = useMemo(
    () =>
      isImageVertical
        ? {
            height: alterDimension ? '100%' : `${percetangeBasedOnScale}%`,
            width: alterDimension ? `${percetangeBasedOnScale}%` : '100%',
          }
        : {
            height: alterDimension ? `${percetangeBasedOnScale}%` : '100%',
            width: alterDimension ? '100%' : `${percetangeBasedOnScale}%`,
          },
    [alterDimension, percetangeBasedOnScale, isImageVertical],
  );

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.imageView}
      onPress={openImageLibrary}
      disabled={isPreview}>
      {uri ? (
        <Image
          source={{uri}}
          style={[getImageDimension, {transform: [{rotate: `${angle}deg`}]}]}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.noImage}>
          {!isPreview && (
            <Icon name="image" color={Colors.gray} size={wp(12)} />
          )}
          <Text color={Colors.gray}>
            {isPreview
              ? `${id === 1 ? 'FRONT' : 'BACK'} SIDE`
              : 'Click to select a photo of the front side.'}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ImageView;
