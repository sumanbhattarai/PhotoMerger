import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import Colors from 'utils/Colors';
import {wp} from 'utils/Constants';

interface Props {
  items: Array<{label: string; value: string}>;
  updateValue: (val: any) => void;
}

const Picker = ({items, updateValue}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(items[0].value);

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
      onChangeValue={val => updateValue(val)}
    />
  );
};

export default Picker;
