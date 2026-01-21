import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/bmi");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/bmi-logo.png")}
        style={styles.imgLogo}
      />
      <text style={styles.appName}>BMI Calculator</text>
      <text style={styles.appName}>คำนวณ BMI</text>
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ marginTop: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  imgLogo: { width: 200, height: 200 },
  appName: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#c22431",
    marginTop: 20,
    fontFamily: "Kanit_700Bold",
  },
});
