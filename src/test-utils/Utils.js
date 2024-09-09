
import { Dimensions } from 'react-native';

import { localimag } from '../test-utils/Localimage'
import { colors } from '../theme/colors'
// const mobileH = Math.round(Dimensions.get('window').height);
// const mobileW = Math.round(Dimensions.get('window').width);
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

export { localimag, mobileH, mobileW, colors }

