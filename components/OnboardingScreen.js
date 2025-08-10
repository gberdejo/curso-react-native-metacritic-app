import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";

// SVG string de la ilustración - versión simplificada del archivo persona-celular.svg
const svgMarkup = `
<svg width="235" height="235" viewBox="0 0 235 235" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Fondo decorativo -->
  <path d="M192.291 48.4099C180.598 21.7468 152.529 11.7076 130.383 29.6099C121.735 36.5941 116.339 47.7096 105.75 52.1699C95.8142 56.3529 83.2276 55.1215 72.4834 57.3869C49.6038 62.1809 18.8 80.3699 21.15 108.396C22.1793 120.672 30.4607 134.307 34.5544 145.794C39.2544 159.01 42.0744 175.545 54.5153 183.446C75.8439 197.01 101.572 185.923 120.785 174.986C131.125 169.106 136.817 165.492 147.951 167.508C158.258 169.388 167.541 175.968 177.613 168.161C185.175 162.3 185.8 150.423 192.15 143.449C199.304 135.59 206.556 135.022 210.273 123.21C214.781 108.88 208.14 99.9266 203.651 87.1238C199.163 74.321 197.8 60.9542 192.291 48.4099Z" fill="#CC9F68" opacity="0.3"/>
  
  <!-- Sombra en el suelo -->
  <ellipse cx="103" cy="205" rx="72" ry="8" fill="#CC9F68" opacity="0.5"/>
  
  <!-- Teléfono -->
  <rect x="75" y="29" width="83" height="172" rx="12" fill="#263238"/>
  <rect x="80" y="48" width="73" height="135" rx="8" fill="white" stroke="#263238" stroke-width="1"/>
  
  <!-- Pantalla del teléfono -->
  <circle cx="121" cy="90" r="18" fill="#CC9F68"/>
  <rect x="97" y="118" width="48" height="8" rx="4" fill="#CC9F68"/>
  <rect x="96" y="136" width="50" height="8" rx="4" fill="#CC9F68"/>
  
  <!-- Estrellas de calificación -->
  <rect x="101" y="143" width="6" height="6" rx="1" fill="#FFD700"/>
  <rect x="109" y="143" width="6" height="6" rx="1" fill="#FFD700"/>
  <rect x="117" y="143" width="6" height="6" rx="1" fill="#FFD700"/>
  <rect x="125" y="143" width="6" height="6" rx="1" fill="#FFD700"/>
  <rect x="133" y="143" width="6" height="6" rx="1" fill="#FFD700"/>
  <rect x="141" y="143" width="6" height="6" rx="1" fill="#CCCCCC"/>
  
  <!-- Líneas de contenido -->
  <rect x="97" y="174" width="48" height="2" rx="1" fill="#CC9F68"/>
  
  <!-- Botón home -->
  <circle cx="121" cy="190" r="8" fill="#CC9F68"/>
  
  <!-- Persona -->
  <g transform="translate(45, 55)">
    <!-- Cabeza -->
    <circle cx="12" cy="12" r="8" fill="#F4D4B8"/>
    <path d="M6 10 Q12 4 18 10 Q18 7 12 5 Q6 7 6 10 Z" fill="#8B4513"/>
    
    <!-- Cuerpo -->
    <rect x="4" y="22" width="16" height="28" rx="8" fill="#E67E22"/>
    <rect x="4" y="30" width="16" height="8" fill="#FFF"/>
    <rect x="4" y="38" width="16" height="12" fill="#E67E22"/>
    
    <!-- Brazos -->
    <ellipse cx="2" cy="32" rx="4" ry="2" fill="#F4D4B8" transform="rotate(-15 2 32)"/>
    <ellipse cx="22" cy="32" rx="4" ry="2" fill="#F4D4B8" transform="rotate(15 22 32)"/>
    
    <!-- Piernas -->
    <rect x="7" y="50" width="4" height="15" rx="2" fill="#F4D4B8"/>
    <rect x="13" y="50" width="4" height="15" rx="2" fill="#F4D4B8"/>
    
    <!-- Pies -->
    <ellipse cx="9" cy="68" rx="3" ry="2" fill="#8B4513"/>
    <ellipse cx="15" cy="68" rx="3" ry="2" fill="#8B4513"/>
  </g>
  
  <!-- Elementos decorativos (hojas) -->
  <g transform="translate(180, 140)">
    <ellipse cx="0" cy="10" rx="5" ry="8" fill="#F0E6D6" transform="rotate(15 0 10)"/>
    <ellipse cx="8" cy="18" rx="4" ry="6" fill="#E8DCC6" transform="rotate(-10 8 18)"/>
    <ellipse cx="12" cy="8" rx="3" ry="5" fill="#F0E6D6" transform="rotate(25 12 8)"/>
  </g>
</svg>
`;

export default function OnboardingScreen({ onGetStarted, onLogin }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Skip button */}
      <TouchableOpacity style={styles.skipButton} onPress={onGetStarted}>
        <Text style={styles.skipText}>Skip for now</Text>
      </TouchableOpacity>

      {/* Main content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Lets get started!</Text>

        {/* Central illustration */}
        <View style={styles.illustrationContainer}>
          <SvgXml xml={svgMarkup} width={250} height={250} />
        </View>
      </View>

      {/* Bottom buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.signUpButton} onPress={onGetStarted}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginPrompt}>Already have an account? </Text>
          <TouchableOpacity onPress={onLogin}>
            <Text style={styles.loginLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4A574", // Warm orange/brown color
  },
  skipButton: {
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  skipText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 40,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "#27AE60",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  signUpText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginPrompt: {
    fontSize: 16,
    color: "#333",
  },
  loginLink: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
