import {ViewStyle, StyleSheet, ImageStyle} from 'react-native';

import {wp, hp} from 'utils/Constants';
import Colors from 'utils/Colors';

interface Style {
  container: ViewStyle;
  outputView: ViewStyle;
  footerView: ViewStyle;
  eachSideView: ViewStyle;
  textView: ViewStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  outputView: {
    backgroundColor: Colors.white,
  },
  footerView: {
    marginVertical: 16,
  },
  eachSideView: {
    borderColor: Colors.gray,
    margin: wp(4),
    height: hp(30),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp(74),
    height: hp(24),
    maxHeight: hp(24),
    maxWidth: wp(74),
  },
});

export default styles;
