import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
 
const PasswordInput = ({ placeholder, value, onChangeText }) => {
  const [showPassword, setShowPassword] = useState(false);
 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 
  return (
<View style={styles.container}>
<TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
      />
<TouchableOpacity onPress={togglePasswordVisibility}>
<Icon
          name={showPassword ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          color="#888"
        />
</TouchableOpacity>
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
    margin: 10,
    borderRadius: 8,
    color: "#333355",
    backgroundColor: "#daeaf5ff",
  },
});
 
export default PasswordInput;