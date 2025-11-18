// Checkbox.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Checkbox = ({ checked, onChange }) => {
  return (
    <TouchableOpacity
      onPress={onChange}
      style={[styles.checkbox, checked && styles.checked]}
    >
      {checked && <Text style={styles.tick}>✓</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    marginLeft:15,
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#999",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#3171C6",
    borderColor: "#3171C6",
  },
  tick: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    
  },
});

export default Checkbox;
