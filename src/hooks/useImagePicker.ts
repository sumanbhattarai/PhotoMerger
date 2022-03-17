import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

import {showError} from 'utils/Toast';

const useImagePicker = () => {
  const [pickedImage, setPickedImage] = useState<string>();

  const openImageLibrary = () =>
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        return;
      }
      if (response.errorMessage) {
        showError(response.errorMessage);
        return;
      }
      setPickedImage(response.assets?.[0].uri);
    });

  return {openImageLibrary, pickedImage};
};

export default useImagePicker;
