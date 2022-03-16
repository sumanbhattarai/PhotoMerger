import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {flex: 1, justifyContent: 'center'},
});

export default styles;
