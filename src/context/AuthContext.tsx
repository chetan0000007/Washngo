import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the shape of the Auth context
interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Create the context
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in when the app loads
  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        setIsAuthenticated(true);
      }
    };
    checkLoginStatus();
  }, []);

  const login = async () => {
    // Perform login logic and save token
    await AsyncStorage.setItem('userToken', 'dummy-token');
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
