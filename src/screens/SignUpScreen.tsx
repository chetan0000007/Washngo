import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme';
import { localimag } from '../test-utils';
import CustomButton from '../componets/CustomButton';
import CustomInput from '../componets/CustomInput';

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.con}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
        />
        <View style={{ alignSelf: 'center', marginVertical: 10 }}>
          <Image resizeMode='contain' source={localimag.logo}
            style={{ height: 170, width: 233 }}></Image>
        </View>
        <Text style={styles.text}>{'Sign Up'}</Text>
        <Text style={styles.text1}>{'Fill in the below form and add life to your car!'}</Text>
        <Text style={styles.text2}>{'Name'}</Text>
        <CustomInput leftIcon={localimag.mail} placeholder='xyz@gmail.com ' />
        <Text style={styles.text2}>{'Email'}</Text>
        <CustomInput leftIcon={localimag.mail} placeholder='xyz@gmail.com ' />
        <Text style={styles.text2}>{'Password'}</Text>
        <CustomInput leftIcon={localimag.lock} eyeIcon={localimag.eye} placeholder='password' />
        <View style={styles.r}>
          <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheck}>
            <Image resizeMode='contain' source={isChecked ? localimag.check : localimag.uncheck} 
              style={{ height: 20, width: 20 }}></Image>
            <Text style={styles.t8}>Agree with <Text style={styles.t1}>{'Terms & Conditions'}</Text></Text>
          </TouchableOpacity>
        </View>
        <CustomButton buttonStyle={{ width: "100%" }} title='Sign In' onPress={() => navigation.navigate('Home')} />
        <View style={styles.t3}>
          <View style={styles.line}></View>
          <Text style={styles.vline}>{'Or'}</Text>

          <View style={styles.line}></View>
        </View>

        <Text style={styles.t1}>{'Already have an account? '} <Text style={styles.t2} onPress={() => navigation.navigate('Login')}>{'Sign In'}</Text></Text>
        <Text style={styles.t4}>{'By login or sign up, you agree to our terms of use and privacy policy'}</Text>


      </View>
      <View style={{ width: '100%' }}>

        <ImageBackground source={localimag.maskright}
          style={{
            height: 150, width: 200, // Arrange items horizontally
            alignSelf: 'flex-end',
          }}>

        </ImageBackground>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 15

  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.BackgroundColor
  },
  text1: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: colors.Secondry,
    marginVertical: 5,
    width: '70%',
  },
  text2: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: colors.BackgroundColor
  },
  forgotPassword: {
    color: colors.BackgroundColor, // Text color for the link
    textDecorationLine: 'underline', // Underline the text
    alignSelf: 'flex-end', // Align the text to the right
    fontSize: 14,
  },
  t3: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // width: '50%',
    alignItems: 'center',
    alignSelf: 'center'
  },
  line: {
    height: 1,
    backgroundColor: colors.ThemePrimary,
    width: 130
  },
  vline: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: colors.BackgroundColor,
    paddingHorizontal: 10
  },
  iconView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '26%',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 5
  },
  t1: {
    alignSelf: 'center',
    color: colors.Secondry,
    marginVertical: 5
  },
  t2: {
    color: colors.ThemeBlack,
    textDecorationLine: 'underline',
    fontWeight: 'bold',

  },
  t8: {
    color: colors.ThemeBlack,
    fontWeight: 'bold',
paddingLeft: 10
  },
  t4: {
    color: colors.Secondry,
    fontSize: 14,
    fontWeight: 'medium',
    alignSelf: 'center',
    width: '95%',
    textAlign: 'center',
    marginVertical: 10
  },
  r: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default SignUpScreen;
