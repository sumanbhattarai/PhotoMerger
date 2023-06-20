import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {hp, wp} from 'utils/Constants';

interface Style {
  container: ViewStyle;
  topView: ViewStyle;
  bottomView: ViewStyle;
  image: ImageStyle;
  button: ViewStyle;
  desc: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    padding: wp(4),
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomView: {},
  image: {
    height: wp(30),
    width: wp(30),
    alignSelf: 'center',
    marginBottom: 12,
    borderRadius: 8,
  },
  desc: {
    marginTop: 24,
    textAlign: 'justify',
  },
  button: {
    marginTop: hp(4),
    width: '100%',
  },
});

export default styles;
