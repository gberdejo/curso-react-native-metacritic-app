import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUpScreen = ({ onGoBack, onSignUp, onSocialLogin }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const insets = useSafeAreaInsets();

  // SVG string de la ilustración - similar a la del onboarding pero adaptada
  const svgMarkup = `
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Fondo decorativo -->
    <path d="M160 40C150 20 130 15 115 25C110 28 108 35 100 38C92 41 82 40 75 42C60 46 45 55 46 70C47 75 50 82 52 87C54 93 56 102 62 106C72 113 85 108 95 103C100 100 103 98 108 99C113 100 117 103 122 100C126 98 126 92 130 88C134 83 138 83 140 78C142 72 139 68 137 62C135 56 134 50 130 44C126 38 122 32 160 40Z" fill="#CC9F68" opacity="0.3"/>
    
    <!-- Teléfono -->
    <rect x="70" y="30" width="60" height="120" rx="8" fill="#263238"/>
    <rect x="74" y="40" width="52" height="100" rx="6" fill="white" stroke="#263238" stroke-width="1"/>
    
    <!-- Pantalla del teléfono -->
    <circle cx="100" cy="70" r="12" fill="#CC9F68"/>
    <rect x="85" y="90" width="30" height="5" rx="2" fill="#CC9F68"/>
    <rect x="84" y="100" width="32" height="5" rx="2" fill="#CC9F68"/>
    
    <!-- Estrellas de calificación -->
    <rect x="88" y="105" width="4" height="4" rx="1" fill="#FFD700"/>
    <rect x="94" y="105" width="4" height="4" rx="1" fill="#FFD700"/>
    <rect x="100" y="105" width="4" height="4" rx="1" fill="#FFD700"/>
    <rect x="106" y="105" width="4" height="4" rx="1" fill="#FFD700"/>
    <rect x="112" y="105" width="4" height="4" rx="1" fill="#FFD700"/>
    
    <!-- Botón home -->
    <circle cx="100" cy="130" r="5" fill="#CC9F68"/>
    
    <!-- Persona -->
    <g transform="translate(35, 70)">
      <!-- Cabeza -->
      <circle cx="8" cy="8" r="6" fill="#F4D4B8"/>
      <path d="M4 7 Q8 3 12 7 Q12 5 8 4 Q4 5 4 7 Z" fill="#8B4513"/>
      
      <!-- Cuerpo -->
      <rect x="2" y="16" width="12" height="20" rx="6" fill="#E67E22"/>
      <rect x="2" y="22" width="12" height="6" fill="#FFF"/>
      
      <!-- Brazos -->
      <ellipse cx="0" cy="24" rx="3" ry="1.5" fill="#F4D4B8" transform="rotate(-10 0 24)"/>
      <ellipse cx="16" cy="24" rx="3" ry="1.5" fill="#F4D4B8" transform="rotate(10 16 24)"/>
      
      <!-- Piernas -->
      <rect x="4" y="36" width="3" height="12" rx="1.5" fill="#F4D4B8"/>
      <rect x="9" y="36" width="3" height="12" rx="1.5" fill="#F4D4B8"/>
    </g>
    
    <!-- Elementos decorativos (hojas) -->
    <g transform="translate(140, 120)">
      <ellipse cx="0" cy="8" rx="4" ry="6" fill="#F0E6D6" transform="rotate(12 0 8)"/>
      <ellipse cx="6" cy="14" rx="3" ry="4" fill="#E8DCC6" transform="rotate(-8 6 14)"/>
      <ellipse cx="9" cy="6" rx="2" ry="4" fill="#F0E6D6" transform="rotate(20 9 6)"/>
    </g>
    
    <!-- Sombra en el suelo -->
    <ellipse cx="100" cy="180" rx="50" ry="5" fill="#CC9F68" opacity="0.4"/>
  </svg>
  `;

  // Iconos SVG para redes sociales
  const googleIcon = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
  `;

  const appleIcon = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="black"/>
  </svg>
  `;

  const facebookIcon = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
  </svg>
  `;

  const eyeIcon = showPassword
    ? `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3.28 3.28a.75.75 0 00-1.06 1.06l2.35 2.35A9.969 9.969 0 001 10c1.257 2.092 2.94 3.775 4.84 4.84l1.35 1.35c.706.187 1.44.287 2.19.287 1.32 0 2.58-.3 3.72-.84l2.35 2.35a.75.75 0 101.06-1.06L3.28 3.28zM10 13a3 3 0 01-3-3c0-.3.04-.58.1-.85l3.75 3.75c-.27.06-.55.1-.85.1zM19 10c-1.257-2.092-2.94-3.775-4.84-4.84L12.81 6.5A3 3 0 0110 13c-.3 0-.58-.04-.85-.1L7.8 11.55A9.969 9.969 0 0119 10z" fill="#666"/>
  </svg>
  `
    : `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3C5.58 3 1.73 6.11 0 10.5 1.73 14.89 5.58 18 10 18s8.27-3.11 10-7.5C18.27 6.11 14.42 3 10 3zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#666"/>
  </svg>
  `;

  const handleSignUp = () => {
    if (!fullName.trim()) {
      Alert.alert("Error", "Please enter your full name");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    onSignUp({ fullName, email, password });
  };

  const handleSocialLogin = (provider) => {
    onSocialLogin(provider);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header con botón de regreso */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onGoBack} style={styles.backButton}>
          <SvgXml
            xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#263238" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`}
          />
        </TouchableOpacity>
      </View>

      {/* Ilustración */}
      <View style={styles.illustrationContainer}>
        <SvgXml xml={svgMarkup} width={150} height={150} />
      </View>

      {/* Formulario de registro */}
      <View style={styles.formContainer}>
        {/* Full Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Jane Cooper"
            placeholderTextColor="#999"
            autoCapitalize="words"
            returnKeyType="next"
          />
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="jessica.hanson@example.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
          />
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••••••"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              returnKeyType="done"
              onSubmitEditing={handleSignUp}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeButton}
            >
              <SvgXml xml={eyeIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSignUp}
          activeOpacity={0.8}
        >
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin("google")}
            activeOpacity={0.8}
          >
            <SvgXml xml={googleIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin("apple")}
            activeOpacity={0.8}
          >
            <SvgXml xml={appleIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin("facebook")}
            activeOpacity={0.8}
          >
            <SvgXml xml={facebookIcon} />
          </TouchableOpacity>
        </View>

        {/* Login Link */}
        <View style={styles.loginLinkContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => onSocialLogin("login")}>
            <Text style={styles.loginLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1E8",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: "#CC9F68",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  illustrationContainer: {
    alignItems: "center",
    paddingVertical: 15,
  },
  formContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
    flex: 1,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#263238",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#263238",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#263238",
  },
  eyeButton: {
    padding: 14,
  },
  signUpButton: {
    backgroundColor: "#2E7D32",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 24,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: "#F8F8F8",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
    color: "#666",
  },
  loginLink: {
    fontSize: 16,
    color: "#2E7D32",
    fontWeight: "600",
  },
});

export default SignUpScreen;
