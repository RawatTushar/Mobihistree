import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Dimensions,
  PixelRatio,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import ShrinkButton from "../components/shrinkbutton";
import { loginWithoutPassword, login } from "../components/api";
import Checkbox from "../components/checkbox";
import FloatingLabelInput from "../components/FloatingLabelInput";
import Facility from "../components/Facility";




const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 390;

function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const Login = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  const [otpVisible, setOtpVisible] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);
  const [textbox2, settextbox2] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isFacility, setisFacility] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [forgotUserId, setForgotUserId] = useState("");
  const [loading, setLoading] = useState(false);

  const facilities = [
    "SiT Triotree Hospital 1 (GIMS01)",
    "SiT Triotree Hospital 2 (GIMS02)",
    "SiT Triotree Hospital 3 (GIMS03)",
  ];

  const handleForgotPassword = async () => {
    if (!forgotUserId) {
      Alert.alert("Error", "Please enter your User ID.");
      return;
    }
    setLoading(true);
    try {
      const response = await loginWithoutPassword(forgotUserId);
      console.log("response forgot ", response);
      if (response.length != 0)
        Alert.alert("Success", "An OTP has been sent to your registered contact.");
    } catch (error) {
      Alert.alert(
        "Request Failed",
        error.response?.data?.message || "Could not process request."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOtp = () => {
    setOtpVisible(false);
    setVisible(true);
  };

  const handlelogin = async () => {
    if (username == "" || password == "") {
      setisFacility(true);
      return;
    }
    setLoading(true);
    try {
      const res = await login(username, password);
      console.log("Responseeeeee", res);
      setisFacility(true);
    } catch (error) {
      Alert.alert(
        "Login Failed",
        error.response?.data?.message || "Invalid credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <LinearGradient
        colors={["#254D81", "#08101B"]}
        locations={[0, 0.6]}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.linearGradient}
      >
        <Image
          source={require("../assets/image/Logo.png")}
          style={{
            marginTop: normalize(60),
            alignSelf: "center",
            width: normalize(120),
            height: normalize(50),
          }}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>MOBI - HISTREE</Text>
      </LinearGradient>

      {/* ===== LOGIN MODAL ===== */}
      <Modal visible={visible} animationType="slide" transparent>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.Box}>
              <View
                contentContainerStyle={{ 
                  paddingTop: normalize(15),
                  paddingBottom: normalize(20) 
                }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
              >
                  <View style={[styles.TextBox, { height: normalize(30) }]}>
                    <Text style={[styles.bigText, {}]}>Welcome Back!</Text>
                  </View>

                  <Facility
                    visible={isFacility}
                    facilities={facilities}
                    onClose={() => setisFacility(false)}
                    onSelect={(facility) => {
                      setisFacility(false);
                      setVisible(false);
                      navigation.navigate("Home");
                    }}
                  />

                  <View>
                    <Text
                      style={{
                        fontSize: normalize(12),
                        color: "black",
                        marginVertical: normalize(15),
                        textAlign: "center",
                      }}
                    >
                      Let's Get You Logged In.
                    </Text>

                    <FloatingLabelInput
                      label="User ID"
                      placeholderTextColor="grey"
                      value={username}
                      onChangeText={setUsername}
                    />
                    <FloatingLabelInput
                      label="Password"
                      placeholderTextColor="grey"
                      secureTextEntry
                      value={password}
                      onChangeText={setPassword}
                    />

                    <View style={styles.rememberForgotRow}>
                      <View style={{ flexDirection: "row" }}>
                        <Checkbox
                          checked={rememberMe}
                          onChange={() => setRememberMe(!rememberMe)}
                        />
                        <Text style={styles.rememberText}>Remember Me</Text>
                      </View>

                      <TouchableOpacity onPress={() => setforgotpassword(true)}>
                        <Text style={styles.forgotText}>Forgot Password ?</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <ShrinkButton style={styles.btn} onPress={handlelogin}>
                    <Text style={styles.btnText}>
                      {loading ? "Please Wait..." : "LOGIN"}
                    </Text>
                  </ShrinkButton>

                  <View style={styles.orContainer}>
                    <View style={styles.line1} />
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.line2} />
                  </View>

                  <ShrinkButton
                    style={styles.btn2}
                    onPress={() => {
                      setVisible(false);
                      setOtpVisible(true);
                    }}
                  >
                    <Text style={styles.altBtnText}>LOGIN WITH OTP</Text>
                  </ShrinkButton>

                  <View style={styles.footer}>
                    <Text style={styles.footerText}>Powered By</Text>
                    <Text style={styles.footerText}>
                      Triotree Technologies Pvt. Ltd.
                    </Text>
                  </View>
                </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>

      {/* ===== FORGOT PASSWORD MODAL ===== */}
      <Modal visible={forgotpassword} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalBackground}>
            <View style={styles.Box1}>
              <View
                style={[
                  styles.TextBox1,
                  { height: normalize(50), flexDirection: "row" },
                ]}
              >
                <TouchableOpacity onPress={() => setforgotpassword(false)}>
                  <Image
                    source={require("../assets/image/back.png")}
                    style={styles.back}
                  />
                </TouchableOpacity>
                <Text style={styles.forgotHeader}>Forgot Password</Text>
              </View>
              <Text style={styles.forgotInfo}>
                Enter your UserID to reset your password.
              </Text>
              <FloatingLabelInput
                label="Enter User ID"
                value={forgotUserId}
                onChangeText={setForgotUserId}
              />
              <ShrinkButton style={styles.btn} onPress={handleForgotPassword}>
                <Text style={styles.btnText}>GO</Text>
              </ShrinkButton>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* ===== OTP LOGIN MODAL ===== */}
      <Modal visible={otpVisible} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalBackground}>
            <View style={styles.Box1}>
              <View style={[styles.TextBox, { flexDirection: "row" }]}>
                <TouchableOpacity onPress={handleOtp}>
                  <Image
                    source={require("../assets/image/back.png")}
                    style={styles.back}
                  />
                </TouchableOpacity>

                <View style={{ marginLeft: normalize(70) }}>
                  <Text style={styles.bigText}>Welcome Back!</Text>
                  <Text style={styles.smallText}>
                    Let's Get You Logged In.
                  </Text>
                </View>
              </View>

              <FloatingLabelInput label="+91- Enter Mobile Number" />

              {textbox2 && <FloatingLabelInput label="Enter OTP" />}

              {textbox2 ? (
                <>
                  <View style={styles.otploginView}>
                    <TouchableOpacity>
                      <Text style={styles.otpText}>Resend OTP</Text>
                    </TouchableOpacity>
                    <Text style={styles.otpText}>- 01:59</Text>
                  </View>
                  <ShrinkButton style={styles.btn}>
                    <Text style={styles.btnText}>SUBMIT</Text>
                  </ShrinkButton>
                </>
              ) : (
                <>
                  <ShrinkButton
                    style={styles.btn}
                    onPress={() => settextbox2(true)}
                  >
                    <Text style={styles.btnText}>SEND OTP</Text>
                  </ShrinkButton>
                  <View
                    style={{ height: normalize(106), marginTop: normalize(10) }}
                  />
                </>
              )}

              <View style={styles.orContainer}>
                <View style={styles.line1} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line2} />
              </View>

              <ShrinkButton
                style={styles.btn2}
                onPress={() => {
                  setOtpVisible(false);
                  setVisible(true);
                  settextbox2(false);
                }}
              >
                <Text style={styles.altBtnText}>LOGIN WITH USERNAME</Text>
              </ShrinkButton>

              <View style={[styles.footer, { marginTop: normalize(90) }]}>
                <Text style={styles.footerText}>Powered By</Text>
                <Text style={styles.footerText}>
                  Triotree Technologies Pvt. Ltd.
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

const baseFont = { fontFamily: "Inter_18pt-Black", color: "black" };

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: normalize(15),
    paddingRight: normalize(15),
  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  Box: {
    backgroundColor: "white",
    borderRadius: normalize(30),
    height: normalize(550),
  },
  Box1: {
    backgroundColor: "white",
    borderRadius: normalize(20),
    height: normalize(600),
  },
  TextBox: { height: normalize(70), alignItems: "center", marginTop: normalize(10) },
  TextBox1: { marginLeft: normalize(10), marginTop: normalize(20) },
  bigText: { ...baseFont, fontSize: normalize(25), fontWeight: "500", textAlign: "center" },
  smallText: { ...baseFont, fontSize: normalize(12), textAlign: "center", marginVertical: normalize(10) },
  rememberForgotRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: normalize(20),
    marginVertical: normalize(10),
  },
  rememberText: { ...baseFont, fontSize: normalize(14), marginLeft: normalize(8) },
  forgotText: { ...baseFont, fontSize: normalize(13), color: "#0B3FFF" },
  btn: {
    backgroundColor: "#3171C6",
    height: normalize(60),
    width: "90%",
    borderRadius: normalize(10),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: normalize(15),
  },
  btnText: { ...baseFont, color: "white", fontSize: normalize(20), fontWeight: "500" },
  btn2: {
    backgroundColor: "#FFFFFF",
    height: normalize(60),
    width: "90%",
    borderRadius: normalize(10),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: normalize(15),
    borderColor: "#20426F",
    borderWidth: 1,
  },
  altBtnText: { ...baseFont, color: "#20426F", fontSize: normalize(20), fontWeight: "400" },
  orContainer: { flexDirection: "row", alignItems: "center", marginTop: normalize(15) },
  line1: { backgroundColor: "#DFDFDF", height: 1, flex: 1, marginLeft: normalize(50), marginRight: normalize(10) },
  line2: { backgroundColor: "#DFDFDF", height: 1, flex: 1, marginLeft: normalize(10), marginRight: normalize(50) },
  orText: { ...baseFont, fontWeight: "500", color: "grey", fontSize: normalize(14) },
  footer: {
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: normalize(5),
    borderTopColor: "#ddd",
    borderRadius: normalize(15),
    marginTop: normalize(20),
  },
  footerText: { ...baseFont, fontSize: normalize(12), textAlign: "center", fontWeight: "400" },
  back: { height: normalize(25), width: normalize(25), marginLeft: normalize(10) },
  forgotHeader: { ...baseFont, textAlign: "center", fontSize: normalize(24), marginLeft: normalize(60) },
  forgotInfo: { ...baseFont, fontSize: normalize(12), marginBottom: normalize(20), textAlign: "center" },
  otpText: { fontSize: normalize(12), fontWeight: "500", color: "#3171C6", marginLeft: normalize(5) },
  otploginView: {
    flexDirection: "row",
    paddingVertical: normalize(10),
    marginHorizontal: normalize(25),
    justifyContent: "flex-end",
  },
  logoText: {
    color: "white",
    fontSize: normalize(16),
    fontWeight: "400",
    letterSpacing: 3,
    marginTop: normalize(10),
    marginLeft: normalize(100),
    fontFamily: "Inter_18pt-Black",
  },
});

export default Login;
