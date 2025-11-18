
import React from "react";
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 390;
function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const Facility = ({ visible, facilities, onClose, onSelect }) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={onClose} // handles Android back button
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => { /* Prevent closing on content tap */ }}>
            <View style={styles.modalContent}>
              <Text style={styles.title}>Choose Facility</Text>

              {facilities.map((facility, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.facilityItem}
                  onPress={() => onSelect(facility)}
                >
                  <Text style={styles.facilityText}>{facility}</Text>
                  <Image source={require("../assets/image/front.png")} />
                </TouchableOpacity>
              ))}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    height: normalize(230),
    marginBottom: normalize(50),
    backgroundColor: "white",
    borderRadius: 10,
    padding: normalize(10),
  },
  title: {
    color: "black",
    fontSize: normalize(20),
    fontWeight: "500",
    textAlign: "center",
    marginBottom: normalize(10),
  },
  facilityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(12),
    borderRadius: normalize(10),
    marginVertical: normalize(7),
    borderWidth: 1,
    borderColor: "#DFDFDF",
    elevation: 2,
  },
  facilityText: {
    fontSize: normalize(14),
    fontWeight: "500",
    color: "black",
  },
});

export default Facility;
