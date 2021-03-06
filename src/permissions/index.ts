import {PermissionsAndroid} from 'react-native';

import {showError} from 'utils/Toast';

const hasAndroidPermission = async () => {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission);
  // if user rejects the access request twice then the status will be never_ask_again in andriod.
  if (status === 'never_ask_again') {
    showError('Please allow the app to access photos and media from setting.');
  }
  return status === 'granted';
};

export {hasAndroidPermission};
