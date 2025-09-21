import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../assets/data/dummy-data";

import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  const favMealIds = useSelector((state) => state.favMeals.favIds);
  const favorites = MEALS.filter((m) => favMealIds.includes(m.id));

  if (favorites.length === 0) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Favorite meals are not added yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <Image
            source={{ uri: itemData.item.imageUrl }}
            resizeMode="cover"
            style={styles.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#555",
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3, // Android 그림자
  },
});
