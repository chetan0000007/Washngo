// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from '../screens/SplashScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from '../context/ThemeContext';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false, // Show header by default
              headerTitleAlign: 'center', // Align the title to the center
              headerStyle: {
                backgroundColor: '#6200ee', // Customize header background color
              },
              headerTintColor: '#fff', // Customize header text color
              headerTitleStyle: {
                fontWeight: 'bold', // Customize header title style
              },
            }}
          >
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            <Stack.Screen name="Signup" component={SignUpScreen} options={{ title: 'Signup' }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />


          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
};
