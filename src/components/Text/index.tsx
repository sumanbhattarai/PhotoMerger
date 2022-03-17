import React, {ReactNode} from 'react';
import {
  Text as DefaultText,
  StyleSheet,
  TextStyle,
  TextProps,
} from 'react-native';

import Fonts from 'utils/Fonts';
import Colors from 'utils/Colors';
import {wp} from 'utils/Constants';

type TextType = 'bold' | 'semi-bold' | 'regular' | 'light';

interface Props extends TextProps {
  type?: TextType;
  color?: string;
  children: ReactNode;
  textAlign?: string;
  style?: TextStyle;
}

const getStyling = (type: TextType): TextStyle => {
  switch (type) {
    case 'bold':
      return {
        fontSize: wp(7.2),
        fontFamily: Fonts.black,
      };

    case 'semi-bold':
      return {
        fontSize: wp(6),
        fontFamily: Fonts.bold,
      };

    case 'regular':
      return {
        fontSize: wp(3.8),
        fontFamily: Fonts.regular,
      };
    case 'light':
      return {
        fontSize: wp(3.2),
        fontFamily: Fonts.light,
      };
    default:
      return {
        fontSize: wp(3.8),
        fontFamily: Fonts.regular,
      };
  }
};

const Text = ({
  type = 'regular',
  color = Colors.black,
  children,
  textAlign = 'left',
  style,
  ...rest
}: Props) => {
  return (
    <DefaultText
      style={[styles.text, {color, textAlign, ...getStyling(type), ...style}]}
      {...rest}>
      {children}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default Text;
