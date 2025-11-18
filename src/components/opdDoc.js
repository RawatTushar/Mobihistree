import React, { useState } from "react";
import {View,Text,StyleSheet,Image,Dimensions,PixelRatio} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 390; // base width = 390
function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const OpdDoc = ({ word }) => {
  const [value, setValue] = useState(null);

  
  const data = [
    { label: "All", value: "all" },
    { label: "Dr. Sharma", value: "sharma" },
    { label: "Dr. Mehta", value: "mehta" },
    { label: "Dr. Singh", value: "singh" },
    { label: "Dr. Rawat", value: "Rawat" },
  ];

  return (
    <View style={styles.card}>
      {/* 🔹 Top Label */}
      <View>
        <Text
          style={{
            color: "#b9b8b8ff",
            fontWeight: "500",
            fontSize: normalize(12),
             marginTop:normalize(5),
            marginHorizontal: normalize(10),
          }}
        >
          {word}
        </Text>
      </View>

      {/* 🔹 Dropdown */}
      <View style={{ marginHorizontal: normalize(5) }}>
        <Dropdown
          style={styles.dropdown}
          itemTextStyle={{ color: "black" }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder="All"
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
          renderRightIcon={() => (
            <Image
              source={require("../assets/image/dropdown.png")}
              style={{ width: normalize(12), height: normalize(12) }}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: normalize(150),
    height: normalize(60),
    marginLeft: normalize(10),
    marginTop: normalize(10),
    borderRadius: normalize(10),
    borderColor: "#DFDFDF",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    elevation: 5, // Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  dropdown: {
    height: normalize(35),
    borderColor: "transparent",
    borderWidth: 0,
    paddingHorizontal: normalize(10),
  },
  placeholderStyle: {
    fontSize: 14,
    color: "black",
    fontWeight: "500",
  },
  selectedTextStyle: {
    fontSize: 14,
    color: "black",
    fontWeight: "500",
  },
  iconStyle: {
    width: normalize(12),
    height: normalize(12),
  },
});

export default OpdDoc;
