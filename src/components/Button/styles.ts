import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {wp} from 'utils/Constants';
import Colors from 'utils/Colors';

interface Style {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: Colors.primary,
    padding: wp(4),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontWeight: '600',
  },
});

export default styles;
