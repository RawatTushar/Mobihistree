import React from "react";
import { Image, Text, View, SafeAreaView, StyleSheet, Dimensions, PixelRatio, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 390; // base width = 390

function normalize(size) {
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const Home = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>

            <LinearGradient
                colors={["#254D81", "#08101B"]}
                locations={[0, 1]}
                start={{ x: 0.1, y: 0.5 }}
                end={{ x: 0.9, y: 3 }}
                style={styles.linearGradient}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.centerContent}>
                        <Image
                            source={require("../assets/image/Logo.png")}
                            style={styles.logoImage}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={{ flexDirection: 'row', width: normalize(110) }}>
                        <Text style={styles.facility}>Facility :</Text>
                        <Text style={styles.facility}>(GIMS) </Text>
                        <TouchableOpacity>
                            <Image source={require("../assets/image/down.png")} style={[styles.facility, { marginTop: normalize(75), marginLeft: normalize(3) }]} />

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/image/profile.png')} style={styles.profile} />
                        <Image source={require('../assets/image/profilepic.png')} style={styles.pc} />

                    </View>
                    

                </View>
                
          
            </LinearGradient>
            
            <View style={styles.screen}>

            </View>
            














        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centerContent: {
        flex: 1,
        marginTop: normalize(60),
        marginLeft: normalize(15),
    },
    logoImage: {
        width: normalize(40),
        height: normalize(30),
    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    facility: {
        marginTop: normalize(70),
        fontWeight: '400',
        fontStyle: 'Semi Bold',
        fontSize: normalize(12),
        color: '#FFFFFF'
    },
    profile: {
        marginTop: normalize(60),
        marginRight: normalize(20),
    },
    screen:{
        marginTop:normalize(10),
        backgroundColor:'white',
        height:normalize(700),
        width:normalize(400),
        borderRadius:normalize(20)
    }
})




export default Home;