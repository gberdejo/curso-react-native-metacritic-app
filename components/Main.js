import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { getLatestDogs } from "../lib/metacritic.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Main() {
  const [dogs, setDogs] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // Example of fetching data
    getLatestDogs()
      .then((data) => setDogs(data))
      .catch((error) => console.error("Error fetching dogs:", error));
  }, []);

  return (
    <View style={{ paddingTop: insets.top }}>
      <ScrollView>
        {dogs.map((dog) => (
          <View key={dog.id} style={styles.card}>
            <Image source={{ uri: dog.image }} style={styles.image} />
            <Text style={styles.title}>{dog.title}</Text>
            <Text style={styles.description}>{dog.description}</Text>
            <Text style={styles.lifeSpan}>{dog.lifeSpan}</Text>
            <Text style={styles.breedGroup}>{dog.breedGroup}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 400,
    height: 200,
    marginBottom: 10,
    alignSelf: "center",
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  lifeSpan: {
    fontSize: 14,
    color: "#666",
  },
  breedGroup: {
    fontSize: 14,
    color: "#666",
  },
});
