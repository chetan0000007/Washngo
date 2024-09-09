// src/screens/HomeScreen.tsx
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { localimag } from '../test-utils';
import CustomButton from '../componets/CustomButton';
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const authContext = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{ alignSelf: 'center', marginVertical: 30,  }}>
        <Image resizeMode='contain' source={localimag.logo}
          style={{ height: 170, width: 233 }}></Image>
      </View>
      <Text style={styles.text}>{'Welcome Ramesh'}</Text>

      <CustomButton buttonStyle={{marginTop: 40}} title='Logout' onPress={() => navigation.navigate('Login')}/> 
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.BackgroundColor,
    alignSelf: 'center',
    marginVertical:50
  },
});
