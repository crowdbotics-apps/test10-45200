import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Alert } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    axios.post("https://dummyjson.com/auth/login", {
      username: username,
      password: password
    }).then(response => {
      if (response.status === 200) {
        navigation.navigate("NewScreen");
      }
    }).catch(error => {
      Alert.alert("Login failed", error.message);
    });
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8
  }
});
export default LoginScreen;