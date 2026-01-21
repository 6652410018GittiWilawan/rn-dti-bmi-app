import React from "react";
import {
  Alert,
  Image,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Bmi() {
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [result, setResult] = React.useState("0.00");
  const [resultText, setResultText] = React.useState("การแปลผล");

  const handleResetPress = () => {
    setWeight("");
    setHeight("");
    setResult("0.00");
    setResultText("การแปลผล");
  };

  const handleCalculatePress = () => {
    Keyboard.dismiss();
    if (weight.length == 0 || height.length == 0) {
      Alert.alert("คำเตือน", "กรุณาป้อนน้ำหนักและส่วนสูง");
      return;
    }
    if (weight == "0" || height == "0") {
      Alert.alert("คำเตือน", "น้ำหนักและส่วนสูงต้องไม่เป็นศูนย์");
      return;
    }

    let heightValue = parseFloat(height) / 100;
    let weightValue = parseFloat(weight);
    let bmi = weightValue / (heightValue * heightValue);
    setResult(bmi.toFixed(2));

    if (bmi < 18.5) {
      setResultText("น้ำหนักต่ำกว่าเกณฑ์");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setResultText("น้ำหนักปกติ");
    } else if (bmi >= 25 && bmi < 29.9) {
      setResultText("น้ำหนักเกิน");
    } else {
      setResultText("โรคอ้วน");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/bmi-logo.png")}
          style={styles.imglogo}
        />
        <View style={styles.cardInput}>
          <text style={styles.labelInput}>ป้อนส่วนสูง(เซนติเมตร)</text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
          <View style={{ height: 10 }} />
          <text style={styles.labelInput}>ป้อนน้ำหนัก(กิโลกรัม)</text>

          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />

          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <TouchableOpacity
              style={styles.btnCalculate}
              onPress={handleCalculatePress}
            >
              <text style={{ color: "#c22431" }}>Calculate</text>
            </TouchableOpacity>
            <view style={{ width: 10 }} />
            <TouchableOpacity
              style={styles.btnReset}
              onPress={handleResetPress}
            >
              <text style={{ color: "#c22431" }}>Reset</text>
            </TouchableOpacity>
            {/* Result */}
          </View>
          <View style={styles.cardResult}>
            <text>BMI</text>
            <text>{result}</text>
            <text>{resultText}</text>
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
    width: "100%",
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
    shadowOffset: { width: 3, height: 4 },
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
    width: "80%",
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
