import {StyleSheet} from 'react-native';

import {wp, hp} from 'utils/Constants';
import Colors from 'utils/Colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    borderColor: Colors.gray,
    padding: wp(4),
    backgroundColor: Colors.white,
    marginTop: 16,
  },
  imageView: {
    height: hp(30),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp(74),
    height: hp(24),
    maxHeight: hp(24),
    maxWidth: wp(74),
  },
  noImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  scaleView: {flexDirection: 'row', marginVertical: 16},
  sliderView: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
