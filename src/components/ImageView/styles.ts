import {StyleSheet} from 'react-native';

import {wp, hp} from 'utils/Constants';
import Colors from 'utils/Colors';

const styles = StyleSheet.create({
  imageView: {
    height: hp(34),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: wp(74),
    height: hp(24),
    maxHeight: hp(24),
    maxWidth: wp(70),
  },
  noImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;
