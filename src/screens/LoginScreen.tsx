import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { localimag } from '../test-utils';
import { colors } from '../theme';
import CustomInput from '../componets/CustomInput';
import CustomButton from '../componets/CustomButton';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.con}>
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{ alignSelf: 'center', marginVertical: 20 }}>
        <Image resizeMode='contain' source={localimag.logo}
          style={{ height: 170, width: 233 }}></Image>
      </View>
      <Text style={styles.text}>{'Sign In'}</Text>
      <Text style={styles.text1}>{'Hi ! Welcome back, you have been missed '}</Text>
      <Text style={styles.text2}>{'Email'}</Text>
      <CustomInput leftIcon={localimag.mail} placeholder='xyz@gmail.com '/>
      <Text style={styles.text2}>{'Password'}</Text>
      <CustomInput leftIcon={localimag.lock} eyeIcon={localimag.eye} placeholder='password'/>
      <Text style={styles.forgotPassword} onPress={()=> {}}>
        Forgot Password?
      </Text>
      <CustomButton buttonStyle={{width: "100%"}} title='Sign In' onPress={() => navigation.navigate('Home')} />
      <View style={styles.t3}> 
      <View style={styles.line}></View>
      <Text style={styles.vline}>{'Or'}</Text>

      <View style={styles.line}></View>
      </View>
      <View style={styles.iconView}>
        <TouchableOpacity>
      <Image resizeMode='contain' source={localimag.google}
          style={{ height: 43, width: 43 }}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
           <Image resizeMode='contain' source={localimag.apple}
          style={{ height: 43, width: 43 }}></Image>
           </TouchableOpacity>
      </View>
      <Text style={styles.t1}>{'Don’t have an account? '} <Text style={styles.t2} onPress={() => navigation.navigate('Signup')}>{'Sign Up'}</Text></Text>
      <Text style={styles.t4}>{'By login or sign up, you agree to our terms of use and privacy policy'}</Text>


    </View>
    <View style={{width: '100%'}}>

    <ImageBackground source={localimag.maskleft}
          style={{ height: 150, width: 200 }}>

          </ImageBackground>
          
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  con:{
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
    width: '50%',
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
  t3:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    // width: '50%',
    alignItems:'center',
    alignSelf:'center'
  },
  line:{
    height: 1,
    backgroundColor: colors.ThemePrimary,
    width:130
  },
  vline: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: colors.BackgroundColor,
    paddingHorizontal: 10
  },
  iconView:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '26%',
    alignItems:'center',
    alignSelf:'center',
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
    fontWeight: 'bold'

  },
  t4: {
    color: colors.Secondry,
    fontSize:14,
    fontWeight: 'medium',
    alignSelf: 'center',
    width: '95%',
    textAlign:'center',
    marginVertical: 10
  }
});

export default LoginScreen;
