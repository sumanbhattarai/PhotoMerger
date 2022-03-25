import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {wp} from 'utils/Constants';
import Colors from 'utils/Colors';

interface Style {
  container: ViewStyle;
  scaleView: ViewStyle;
  sliderView: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    borderWidth: 0.2,
    borderColor: Colors.gray,
    padding: wp(4),
    backgroundColor: Colors.white,
    marginTop: 16,
  },
  scaleView: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  sliderView: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginBottom: wp(4),
  },
});

export default styles;
