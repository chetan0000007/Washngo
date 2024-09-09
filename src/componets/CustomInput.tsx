// src/components/CustomTextInput.tsx
import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, Image, TouchableOpacity, ImageProps } from 'react-native';
import { localimag } from '../test-utils';
import { colors } from '../theme';

interface CustomInputProps extends TextInputProps {
  iconName: string; // Name of the icon to display
  placeholder: string; // Placeholder text for the input
  isPassword?: boolean; // Boolean to specify if it's a password field
  leftIcon: ImageProps;
  eyeIcon? : ImageProps;
  onPress? : () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  iconName,
  placeholder,
  isPassword = false,
  leftIcon,
  eyeIcon,
  onPress,
  ...rest
}) => {
  return (
    <View style={styles.container}>
        <Image resizeMode='contain' source={leftIcon}
          style={{ height: 20, width: 20}}></Image>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        secureTextEntry={isPassword}
        {...rest} // Spread the rest of the TextInputProps (like value, onChangeText)
      />
      <TouchableOpacity>
       <Image resizeMode='contain' source={eyeIcon}
          style={{ height: 20, width: 20}}></Image>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    height:53,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.Secondry,
    paddingHorizontal: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    paddingHorizontal: 10,
    width: "87%",
    fontSize: 16,
    color: '#333',
    fontStyle: 'italic'
  },
});

export default CustomInput;
