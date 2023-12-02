import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
// import {  } from "react-native-safe-area-context";

// usestate hooks used

function Login() {
  const [username, onChangeText] = React.useState("Username");
  const [password, onChangePassword] = React.useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={username}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="useless placeholder"
          keyboardType="visible-password"
        />
      </SafeAreaView>
      <Text>{username}</Text>
      <Text>{password}</Text>
      <Text>Need to implement Oauth here for the integration</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
