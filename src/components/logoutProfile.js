
import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback, Pressable } from "react-native";
import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 390;
function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const LogoutProfile = ({ visible, onClose,navigation}) => {

  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
             <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:normalize(10),marginHorizontal:normalize(8)}}>
              <View>
                <Text style={{color:'#3171C6',fontSize:normalize(18),fontWeight:'600'}}>Aryan Rajput</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                
                <Text style={{color:"#FF0000"}}>LOGOUT</Text>
                <Pressable onPress={()=> navigation.navigate("Login")} style={{width:normalize(30)}}> 
                <Image source={require("../assets/image/logout.png")} style={{marginTop:normalize(2),marginLeft:normalize(8)}}/>
                </Pressable>
              </View>
             </View>
             <View> 
              <Text style={{color:"black",fontWeight:"400",fontSize:normalize(12),marginHorizontal:normalize(8)}}>Role - Admin</Text>
             </View>

              <TouchableOpacity style={styles.facilityItem} activeOpacity={0.8}>
                <Image source={require('../assets/image/masterconfig.png')} style={{height:normalize(25),width:normalize(25),marginHorizontal:normalize(8)}}/>
                <Text style={styles.facilityText}>Master Config</Text>
                <Image source={require("../assets/image/front.png")} style={{marginRight:normalize(5)}}/>
              </TouchableOpacity>

                 <TouchableOpacity style={styles.facilityItem} activeOpacity={0.8}>
                <Image source={require('../assets/image/masterconfig.png')} style={{height:normalize(25),width:normalize(25),marginHorizontal:normalize(8)}}/>
                <Text style={styles.facilityText}>Master Config</Text>
                <Image source={require("../assets/image/front.png")} style={{marginRight:normalize(5)}} />
              </TouchableOpacity>

              
              <TouchableOpacity
                onPress={() => setIsInnerVisible(true)}
                style={{ marginTop: normalize(12), alignSelf: "flex-end" }}
                activeOpacity={0.8}
              >
                
              </TouchableOpacity>

            

          
             
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
    marginVertical:normalize(20),
    width: "90%",
    height: normalize(250),
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
    height:normalize(50),
    borderRadius: normalize(10),
    marginVertical: normalize(15),
    borderWidth: 1,
    borderColor: "#DFDFDF",
    elevation: 2,
  },
  facilityText: {
    marginRight:normalize(160),
    fontSize: normalize(14),
    fontWeight: "400",
    color: "black",
  },
});

export default LogoutProfile;
