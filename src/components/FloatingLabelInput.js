import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, Animated, StyleSheet } from "react-native";

const FloatingLabelInput = ({ label, value, onChangeText, secureTextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value === "" ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value !== "" ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: "absolute",
    left: 15,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 1],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ["#aaa", "#8C8C8C"],
    }),
    backgroundColor: "white",
    paddingHorizontal: 4,
    fontFamily: "Inter_18pt-Black", 
    marginBottom: 10// Added font family for label
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#aaa"
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    width: "90%",
    alignSelf: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    paddingHorizontal: 20,
    paddingTop:15,
    fontSize: 16,
    color: "black",
    fontFamily: "Inter_18pt-Black", 
  },
});

export default FloatingLabelInput;
