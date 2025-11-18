import React, { useState } from "react";
import {Image,Text,View,SafeAreaView,StyleSheet,Dimensions,PixelRatio,TouchableOpacity,ScrollView, Modal,} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import OpdDoc from "../components/opdDoc";
import DateCard from "../components/Date";
import Consultant from "../components/Consultant";
import { Pressable } from "react-native";
import LogoutProfile from "../components/logoutProfile";


const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 390; // base width = 390

function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const Tab = createMaterialTopTabNavigator();
const OPD = () => (
  <ScrollView style={{flex:1,backgroundColor:'white'}}>
    <View style={{marginHorizontal:normalize(20),marginVertical:normalize(10),flex:1}}>
      <View style={{flexDirection:'row',height:normalize(80),justifyContent:'space-between',marginVertical:normalize(10)}}>
        <OpdDoc word="Doctor"/>
        <DateCard/>
      </View>
      <Consultant status={false} navigation screen="opdPatient"/>
      <Consultant status={true}/>
    </View>
   
  
  </ScrollView>
);
const IPD = () => (
  
 <ScrollView style={{flex:1,backgroundColor:'white'}}>
    <View style={{marginHorizontal:normalize(25),marginVertical:normalize(10),flex:1}}>
      <View style={{flexDirection:'row',height:normalize(80),justifyContent:'space-between',marginVertical:normalize(10)}}>
        
       
        <OpdDoc word="Doctor"/>
        <OpdDoc word="WardList"/>
      
      </View>
      <Consultant status={false}/>
      <Consultant status={true}/>
      <Consultant status={true}/>
      <Consultant status={true}/>
       

    </View>
   
  
  </ScrollView>
);
const EMERGENCY = () => (
   <ScrollView style={{flex:1,backgroundColor:'white'}}>
    <View style={{marginHorizontal:normalize(20),marginVertical:normalize(20),flex:1}}>
      <Text style={{color:'black'}}> EMERGENCY SCREEN </Text>
      <Consultant status={false}/>
    

    </View>
   
  
  </ScrollView>
);
const REFERRAL = () => (
  <ScrollView style={styles.tabContent}>
    <Text style={styles.tabText}>Referral Screen</Text>
  </ScrollView>
);


const Tabs = () => (

  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: {
        fontSize:normalize(16),
        height:normalize(28),
        width:normalize(85),
        fontSize: normalize(14),
        fontWeight: '800',
        color: "#8C8C8C",
      },
      tabBarIndicatorStyle: {
    
        backgroundColor: "white",
        height: normalize(5),
        borderRadius: normalize(30),
      },
    }}
  >

    <Tab.Screen name="OPD" component={OPD} />
    <Tab.Screen name="IPD" component={IPD} />
    <Tab.Screen name="EMERGENCY" component={EMERGENCY} />
    <Tab.Screen name="REFERRAL" component={REFERRAL} />
  </Tab.Navigator>
);



export default Tabs;


const styles = StyleSheet.create({
 tabText: {
    fontSize: normalize(14),
    color: "black",
  },
});

