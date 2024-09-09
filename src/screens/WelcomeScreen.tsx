// src/screens/WelcomeScreen.tsx
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { colors } from '../theme/colors';
import { localimag } from '../test-utils';
import CustomButton from '../componets/CustomButton';

export const WelcomeScreen = ({ navigation }: any) => {
  const authContext = useContext(AuthContext);

  return (
    <View style={styles.container}>

      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        <Image resizeMode='contain' source={localimag.maskupleft}
          style={{ height: 200, width: 200, right: 15 }}></Image>
        <Image resizeMode='contain' source={localimag.maskupright}
          style={{ height: 200, width: 200, left: 10 }}></Image>
      </View>
      <Image resizeMode='contain' source={localimag.logo}
        style={{ height: 280, width: 382 }}></Image>
      <Text style={styles.text}>{'Sparkle & Shine  Transform Your Drive with Every Wash!'}</Text>
      <CustomButton title='Let’s Start' onPress={() => navigation.navigate('Login')} />
      <Text style={styles.t1}>{'Already  have an account? '} <Text style={styles.t2} onPress={() => navigation.navigate('Login')}>{'Sign in'}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
    color: colors.Secondry
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

  }
});
