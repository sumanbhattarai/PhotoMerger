import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';

import {hp, wp} from 'utils/Constants';

interface Style {
  container: ViewStyle;
  topView: ViewStyle;
  bottomView: ViewStyle;
  image: ImageStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    padding: wp(4),
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {},
  image: {
    height: wp(30),
    width: wp(30),
  },
  button: {
    marginTop: hp(4),
    width: '100%',
  },
});

export default styles;
