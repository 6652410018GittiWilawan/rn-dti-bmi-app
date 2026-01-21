import React from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Bmi() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/bmi-logo.png")}
          style={styles.imglogo}
        />
        <View style={styles.cardInput}>
          <text style={styles.labelInput}>ป้อนน้ำหนัก(กิโลกรัม)</text>
          <TextInput style={styles.textInput} keyboardType="numeric" />
          <View style={{ height: 10 }} />
          <text style={styles.labelInput}>ป้อนส่วนสูง(เซนติเมตร)</text>
          <TextInput style={styles.textInput} keyboardType="numeric" />

          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <TouchableOpacity style={styles.btnCalculate}>
              <text style={{ color: "#c22431" }}>Calculate</text>
            </TouchableOpacity>
            <view style={{ width: 10 }} />
            <TouchableOpacity style={styles.btnReset}>
              <text style={{ color: "#c22431" }}>Reset</text>
            </TouchableOpacity>
            {/* Result */}
          </View>
          <View style={styles.cardResult}>
            <text>BMI</text>
            <text>0.00</text>
            <text>ผล</text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardResult: {
    //cardResult style
    fontFamily: "Kanit_700Bold",
    color: "#c22431",
    fontSize: 20,
    fontWeight: "bold",
    width: "80%",
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#be5e66",
    shadowOffset: { width: 2, height: 4 },
  },
  btnReset: {
    //btnReset style
    flex: 1,
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "#fff",
    shadowColor: "#be5e66",
    shadowOffset: { width: 2, height: 4 },
  },
  btnCalculate: {
    //btnCalculate style
    flex: 2,
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#be5e66",
    shadowOffset: { width: 2, height: 4 },
  },
  imglogo: { width: 120, height: 120, marginTop: 40 }, //imglogo style
  container: {
    //container style
    flex: 1,
    alignItems: "center",
  },
  cardInput: {
    //cardInput style
    backgroundColor: "#c22431",
    width: "100%",
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#be5e66",
    shadowOffset: { width: 2, height: 4 },
  },
  labelInput: {
    //labelInput style
    backgroundColor: "#c22431",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  textInput: {
    //textInput style
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#fff",
    fontFamily: "Kanit_700Bold",
    fontSize: 20,
    color: "#be5e66",
  },
});
