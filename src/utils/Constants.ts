import {Dimensions, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Width: number = Dimensions.get('screen').width;
export const Height: number = Dimensions.get('screen').height;
export const isAndroid: boolean = Platform.OS === 'android';
export const brandName: string = 'Photo Merger';

export {wp, hp};
