import React, {useContext} from 'react';
import {Image, View} from 'react-native';

import styles from './styles';
import Colors from 'utils/Colors';
import {AppContext} from 'providers/AppProvider';
import Text from 'components/Text';

const EachPhotoView = ({id}: {id: number}) => {
  const {getImageConfig} = useContext(AppContext);
  const {uri, scale, angle} = getImageConfig(id);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.eachSideView, {borderWidth: uri ? 0 : 0.2}]}>
      {uri ? (
        <Image
          source={{uri: uri}}
          style={[
            styles.image,
            {transform: [{scale}, {rotate: `${angle}deg`}]},
          ]}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.textView}>
          <Text color={Colors.gray}>
            {id === 1 ? 'FRONT SIDE' : 'BACK SIDE'}
          </Text>
        </View>
      )}
    </View>
  );
};

export default EachPhotoView;
