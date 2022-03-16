import {ViewStyle, StyleSheet} from 'react-native';

import {hp, wp} from 'utils/Constants';

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    padding: wp(4),
  },
});

export default styles;
