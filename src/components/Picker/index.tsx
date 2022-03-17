import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import Fonts from 'utils/Fonts';
import styles from './styles';

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
      labelStyle={{fontFamily: Fonts.regular}}
      textStyle={{fontFamily: Fonts.regular}}
    />
  );
};

export default Picker;
