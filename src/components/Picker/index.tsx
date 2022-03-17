import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import Fonts from 'utils/Fonts';
import Colors from 'utils/Colors';
import {wp} from 'utils/Constants';

interface Props {
  items: Array<{label: string; value: string}>;
}

const Picker = ({items}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(items[0].value);
  console.log({value});

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      style={styles.style}
      dropDownContainerStyle={styles.dropDownContainer}
      labelStyle={styles.label}
      textStyle={styles.label}
      TickIconComponent={() => (
        <Icon name="check" size={wp(4)} color={Colors.primary} />
      )}
    />
  );
};

export default Picker;
