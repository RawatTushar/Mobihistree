import React, { useState } from "react";
import {Image,Text,View,SafeAreaView,StyleSheet,Dimensions,PixelRatio,TouchableOpacity,ScrollView, Modal,} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import OpdDoc from "../components/opdDoc";
import DateCard from "../components/Date";
import { Pressable } from "react-native";
import LogoutProfile from "../components/logoutProfile";
import Tabs from "./tabs";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 390; // base width = 390

function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}



const Home = ({ navigation }) => {
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const[visible,setVisible]=useState(true);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#08101B" }}>
      {/* 🔹 Header Gradient */}
      <LinearGradient
        colors={["#254D81", "#08101B"]}
        locations={[0, 1]}
        start={{ x: 0.1, y: 0.3 }}
        end={{ x: 0.9, y: 3 }}
        style={styles.linearGradient}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} >
            <Image
              source={require("../assets/image/back.png")}
              style={styles.back}
            />
          </TouchableOpacity>

          <View style={styles.centerContent}>
            <Image
              source={require("../assets/image/Logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.facilityContainer}>
            <Text style={styles.facility}>Facility :</Text>
            <Text style={styles.facility}>(GIMS)</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/image/down.png")}
                style={styles.downIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.profileContainer}>
            {/* <Pressable onPress={() => setIsLogoutVisible(true)}
              >  */}
            <Image
              source={require("../assets/image/profile.png")}
              style={styles.profile}
            />
            {/* </Pressable> */}
    
          </View>
        </View>
      </LinearGradient>

     {/* // First Modal Login UI */}
      <Modal
      visible={visible}
      transparent
      onRequestClose={()=>setVisible(false)}
      >
      <View style={styles.screen}>
        
          <Tabs />
        
      </View>
 </Modal>

 
 
      {/* Logout modal */}
      <LogoutProfile
        visible={isLogoutVisible}
        onClose={() => setIsLogoutVisible(false)}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: normalize(200),
    paddingHorizontal: 15,
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
  },
  centerContent: {
   
    flex: 1,
    marginTop: normalize(60),
    marginLeft: normalize(15),
  },
  logoImage: {
    width: normalize(40),
    height: normalize(30),
  },
  back: {
    tintColor:'white',
    height: normalize(15),
    width: normalize(20),
    marginLeft: normalize(1),
    marginTop: normalize(5),
  },
  facilityContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: normalize(110),
    marginTop: normalize(60),
  },
  facility: {
    fontWeight: "400",
    fontSize: normalize(12),
    color: "#FFFFFF",
  },
  downIcon: {
    width: normalize(10),
    height: normalize(10),
    marginLeft: normalize(5),
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalize(60),
    marginRight: normalize(10),
  },
  profile: {
    marginRight: normalize(10),
  },
  pc: {
    width: normalize(30),
    height: normalize(30),
  },
  screen: {
    backgroundColor: "white",
    flex: 1,
    marginTop: normalize(100),
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    overflow: "hidden",
  },
 
  tabText: {
    fontSize: normalize(14),
    color: "black",
  },
});

export default Home;