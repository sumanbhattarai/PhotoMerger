import {StyleSheet, ViewStyle} from 'react-native';

import {hp} from 'utils/Constants';
import Colors from 'utils/Colors';

interface Style {
  imageView: ViewStyle;
  noImage: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  imageView: {
    height: hp(34),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  noImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;
