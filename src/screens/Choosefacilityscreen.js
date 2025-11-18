// ChooseFacilityScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function Choosefacilityscreen({ navigation }) {
  const facilities = [
    "SiT Triotree Hospital 1 (GIMS1)",
    "SiT Triotree Hospital 2 (GIMS2)",
    "SiT Triotree Hospital 3 (GIMS3)"
  ];

  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.title}>Choose Facility</Text>
        {facilities.map((facility, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.option} 
            onPress={() => alert(`Selected: ${facility}`)}
          >
            <Text style={styles.optionText}>{facility}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter_18pt-Black', 
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 20,
    fontFamily: 'Inter_18pt-Black'
  },
});
