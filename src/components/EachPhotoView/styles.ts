import {StyleSheet, ImageStyle, ViewStyle} from 'react-native';

import {wp, hp} from 'utils/Constants';
import Colors from 'utils/Colors';
interface Style {
  eachSideView: ViewStyle;
  textView: ViewStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Style>({
  eachSideView: {
    borderColor: Colors.gray,
    height: hp(30),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp(74),
    height: hp(24),
    maxHeight: hp(24),
    maxWidth: wp(70),
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
