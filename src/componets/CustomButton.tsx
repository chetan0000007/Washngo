import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../theme';

interface CustomButtonProps {
  title: string; // Text to display inside the button
  onPress: () => void; // Function to call when button is pressed
  buttonStyle?: ViewStyle; // Optional: Custom style for the button
  textStyle?: TextStyle; // Optional: Custom style for the text
  disabled?: boolean; // Optional: Disable the button
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  title, 
  onPress, 
  buttonStyle, 
  textStyle, 
  disabled = false 
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle, disabled && styles.disabledButton]}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.ThemePrimary, // Default background color
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 30,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center'
  },
  buttonText: {
    color: colors.ThemeBlack, // Default text color
    fontSize: 20,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Style when button is disabled
  },
});

export default CustomButton;
