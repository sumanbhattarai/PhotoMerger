import {ViewStyle, StyleSheet, ImageStyle, TextStyle} from 'react-native';

import {wp, hp} from 'utils/Constants';
import Colors from 'utils/Colors';

interface Style {
  container: ViewStyle;
  outputView: ViewStyle;
  footerView: ViewStyle;
  eachSideView: ViewStyle;
  textView: ViewStyle;
  image: ImageStyle;
  header: TextStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  outputView: {
    backgroundColor: Colors.white,
    marginTop: 16,
  },
  footerView: {
    marginVertical: 16,
  },
  eachSideView: {
    borderColor: Colors.gray,
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
    maxWidth: wp(70),
  },
  header: {
    marginTop: 16,
  },
  button: {marginTop: 16},
});

export default styles;
