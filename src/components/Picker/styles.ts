import {StyleSheet} from 'react-native';

import Colors from 'utils/Colors';
import Fonts from 'utils/Fonts';

const styles = StyleSheet.create({
  style: {borderWidth: 0, borderRadius: 0, marginTop: 16},
  dropDown: {fontSize: 90},
  dropDownContainer: {borderRadius: 0, borderColor: Colors.lightGray},
  label: {fontFamily: Fonts.regular},
});

export default styles;
