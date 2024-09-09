// src/screens/SplashScreen.tsx
import React, { useContext, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const SplashScreen = ({ navigation }: any) => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const checkAuth = async () => {
      if (authContext?.isAuthenticated) {
        navigation.replace('Home');
      } else {
        navigation.replace('Welcome');
      }
    };
    checkAuth();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
