import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  PixelRatio,
  Pressable,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 390; // base width = 390

function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const Consultant = ({ status, }) => {
  return (
    <Pressable onPress={{}} >
    <View style={styles.card}>
      <View style={{ marginHorizontal: normalize(15) }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginVertical: normalize(5),
          }}
        >
          <View>
            {(
              <Text
                style={{
                  color: "#3171C6",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                {status ? "Mr. Male Name" : "Mrs. Female Name"}
              </Text>
            )}

          </View>

          <View>
            <Image
              source={
                status
                  ? require("../assets/image/Male.png")
                  : require("../assets/image/Female.png")
              }
            />
          </View>

        </View>

        <View>
          <Text style={{ color: "#3D3D3D", marginHorizontal: normalize(2) }}>
            UHID- GIMS.582659 | 25 Year (s)
          </Text>
        </View>
        <View style={{
          height: 1,
          backgroundColor: '#DFDFDF', // light grey
          marginVertical: normalize(5),
        }} />

      </View>

      <View
        style={{
          marginHorizontal: normalize(20),
          marginVertical: normalize(10),
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ width: normalize(130) }}>
          <Text
            style={{
              color: "black",
              fontWeight: "400",
              fontSize: normalize(14),
            }}
          >
            Follow up Consult
          </Text>
          <Text
            style={{
              color: "#8C8C8C",
              fontWeight: "400",
              fontSize: normalize(14),
            }}
          >
            Antonio Di Martino Appt Time :
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#FF9000",
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            View

          </Text>
        </View>
      </View>
    </View>
     </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: normalize(10),
    borderColor: "#DFDFDF",
    borderWidth: 1,
    height: normalize(150),
    width: "95%",
    marginLeft: normalize(10),
    marginVertical: normalize(10),

    // 🔹 Shadow / Elevation effect
    backgroundColor: "#FFFFFF",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default Consultant;
