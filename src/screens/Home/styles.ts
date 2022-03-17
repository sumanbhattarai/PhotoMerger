import {ViewStyle, StyleSheet, ImageStyle, TextStyle} from 'react-native';

import {wp, hp} from 'utils/Constants';
import Colors from 'utils/Colors';

interface Style {
  container: ViewStyle;
  outputView: ViewStyle;
  footerView: ViewStyle;
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
  header: {
    marginTop: 16,
  },
  button: {marginTop: 16},
});

export default styles;
