import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { mobileW } from '@/test-utils/Utils';

export const typography = StyleSheet.create({


  Heading: {
    //fontSize: 20,
    fontSize: mobileW * 5.2 / 100,
    fontFamily: 'Poppins-Medium',
    color: colors.White
  },

  TextNormal16: {
    fontSize: mobileW * 4.8 / 100,
    fontFamily: 'Poppins-Regular',
    color: colors.White,
    width: mobileW * 70 / 100
  },

  pText: {
    fontFamily: 'Poppins-Regular',
    fontSize: mobileW * 4.3 / 100,
  },

  authHeadingtxt: {
    fontSize: 19,
    fontFamily: 'Poppins-Regular',
    color: colors.White
  },

  MediumText: {
    fontFamily: 'Poppins-Regular',
    fontSize: mobileW * 4.3 / 100,
    color: colors.White
  },
  MediumTextGrey: {
    fontFamily: 'Poppins-Regular',
    fontSize: mobileW * 4.3 / 100,
    color: colors.OutlineColr
  },

  BodyText: {
    fontSize: mobileW * 4.3 / 100,
    fontFamily: 'Poppins-Regular',
    color: colors.SecondryTextGray
  },

  SmallText: {
    fontSize: mobileW * 2.7 / 100,
    fontFamily: 'Poppins-Regular',
    color: colors.SecondryTextGray
  },
  SocialText: {
    fontSize: 19.5,
    fontFamily: 'Poppins-Medium',
    color: colors.White
  },
  // ----------------------


  textMedium14: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: colors.White
  },
  textMedium14Grey: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: colors.SecondryTextGray
  },
  textSemiBold28: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 29,
    color: colors.White
  },

  // ----------------------

  textMedium141: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: colors.White,
  },
  textMedium14Grey1: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: colors.SecondryTextGray
  },
  textSemiBold281: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 29,
    color: colors.White
  },



  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18.6,
  },
  LoginHText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
  },


  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },

  error: {
    fontSize: 14,
    fontWeight: '400',
  },
});
