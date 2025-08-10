import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";
import { useState } from "react";
import Main from "./components/Main.js";
import OnboardingScreen from "./components/OnboardingScreen.js";
import SignUpScreen from "./components/SignUpScreen.js";
import LoginScreen from "./components/LoginScreen.js";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("onboarding"); // 'onboarding', 'signup', 'login', 'main'

  const handleGetStarted = () => {
    setCurrentScreen("signup");
  };

  const handleLogin = () => {
    setCurrentScreen("login");
  };

  const handleSkip = () => {
    setCurrentScreen("main");
  };

  const handleGoBack = () => {
    setCurrentScreen("onboarding");
  };

  const handleSignUp = (userData) => {
    // Simular registro exitoso
    Alert.alert(
      "Registration Successful!",
      `Welcome ${userData.fullName}! Your account has been created.`,
      [
        {
          text: "Continue",
          onPress: () => setCurrentScreen("main"),
        },
      ]
    );
  };

  const handleLoginSubmit = (userData) => {
    // Simular login exitoso
    Alert.alert(
      "Login Successful!",
      `Welcome back! You have been logged in successfully.`,
      [
        {
          text: "Continue",
          onPress: () => setCurrentScreen("main"),
        },
      ]
    );
  };

  const handleSocialLogin = (provider) => {
    if (provider === "login") {
      // Ir a pantalla de login
      setCurrentScreen("login");
    } else if (provider === "signup") {
      // Ir a pantalla de registro
      setCurrentScreen("signup");
    } else {
      // Simular login social
      Alert.alert(
        "Social Login",
        `Login with ${provider} would be implemented here.`,
        [
          {
            text: "Continue",
            onPress: () => setCurrentScreen("main"),
          },
        ]
      );
    }
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "onboarding":
        return (
          <OnboardingScreen
            onGetStarted={handleGetStarted}
            onLogin={handleLogin}
            onSkip={handleSkip}
          />
        );
      case "signup":
        return (
          <SignUpScreen
            onGoBack={handleGoBack}
            onSignUp={handleSignUp}
            onSocialLogin={handleSocialLogin}
          />
        );
      case "login":
        return (
          <LoginScreen
            onGoBack={handleGoBack}
            onLogin={handleLoginSubmit}
            onSocialLogin={handleSocialLogin}
          />
        );
      case "main":
      default:
        return <Main />;
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {renderCurrentScreen()}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
