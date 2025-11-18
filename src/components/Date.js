import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  PixelRatio,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Calendar } from "react-native-calendars";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 390;
function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const DateCard = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const openCalendar = () => setIsCalendarVisible(true);
  const closeCalendar = () => setIsCalendarVisible(false);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    closeCalendar();
  };

  const formattedDate = selectedDate
    ? new Date(selectedDate).toDateString()
    : "Tue Jul 15 2025";

  return (
    <View style={styles.card}>
      <View>
        <Text
          style={{
            color: "#b9b8b8ff",
            marginTop:normalize(5),
            fontWeight: "500",
            fontSize: normalize(12),
            marginHorizontal: normalize(10),
          }}
        >
          Date
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: normalize(8),
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 14,
            fontWeight: "500",
            marginTop: normalize(8),
          }}
        >
          {formattedDate}
        </Text>
        <TouchableOpacity onPress={openCalendar} activeOpacity={0.7}>
          <Image
            source={require("../assets/image/Calender.png")}
            style={{ marginTop: normalize(8) }}
          />
        </TouchableOpacity>
      </View>

      {/* 🗓️ Calendar Modal */}
      <Modal
        visible={isCalendarVisible}
        transparent
        animationType="fade"
        onRequestClose={closeCalendar}
      >
       
        <TouchableWithoutFeedback onPress={closeCalendar}>
          <View style={styles.modalBackdrop}>
          
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Calendar
                  onDayPress={handleDayPress}
                  markedDates={
                    selectedDate 
                      ? {
                          [selectedDate]: {
                            selected: true,
                            selectedColor: "#2a85ff",
                          },
                        }

                      : {}
                  }
                />

                <TouchableOpacity
                  onPress={closeCalendar}
                  style={styles.closeButton}
                  activeOpacity={0.8}
                >
                  <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: normalize(160),
    height: normalize(60),
    marginRight: normalize(10),
    marginTop: normalize(10),
    borderRadius: normalize(10),
    borderColor: "#DFDFDF",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: normalize(12),
  },
  modalContent: {
    width: "100%",
    borderRadius: normalize(12),
    backgroundColor: "#FFFFFF",
    padding: normalize(12),
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  closeButton: {
    marginTop: normalize(10),
    alignSelf: "flex-end",
    backgroundColor: "#2a85ff",
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(14),
    borderRadius: normalize(8),
  },
});

export default DateCard;
