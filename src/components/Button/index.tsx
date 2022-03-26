import React, {memo, ReactNode} from 'react';
import {TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';

import styles from './styles';
import Text from 'components/Text';

interface Props extends TouchableOpacityProps {
  title: string;
  needsInternet?: boolean;
  loading?: boolean;
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
}

const Button = ({title, style, ...rest}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style]}
      {...rest}>
      <Text type="regular" style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
