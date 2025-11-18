import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TextInput,PixelRatio } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";



const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 390; 

function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
const Stack = createNativeStackNavigator();

const Splash = ({ navigation }) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 200);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      

      <LinearGradient
        colors={["#254D81", "#08101B"]}
        locations={[0, 0.6]}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.linearGradient}
      >
        <View style={styles.centerContent}>
          <Image
            source={require("./src/assets/image/Logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>MOBI-HISTREE</Text>
        </View>
      </LinearGradient>

    
    </SafeAreaView>
  );
};

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Splash" component={Splash}

        />

        <Stack.Screen name="Login" component={Login}
          options={{
            animation: "slide_from_bottom",
          }} />
       
   <Stack.Screen name= "Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "30%",
    height: "10%",
  },
  logoText: {
    color: "white",
    fontSize: normalize(16),
    fontWeight: "400",
    letterSpacing: 3,
    marginBottom: "10%",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop:normalize(20)
  },
  footerText: {
    fontSize: 1,
    color: "black",
    textAlign: "center",
    fontWeight: "500",
    fontSize:normalize(12)
  },
  
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },

});

