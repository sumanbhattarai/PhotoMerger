import {ViewStyle, StyleSheet} from 'react-native';

import {wp, hp} from 'utils/Constants';
import Colors from 'utils/Colors';

interface Style {
  container: ViewStyle;
  outputView: ViewStyle;
  footerView: ViewStyle;
  eachSideView: ViewStyle;
  textView: ViewStyle;
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
    height: hp(30),
    borderWidth: 0.2,
    borderColor: Colors.gray,
    margin: wp(4),
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
