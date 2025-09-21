import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../assets/data/dummy-data";
import MealDetailsInfo from "../components/MealDetailsInfo";
import MealSubtitle from "../components/MealSubtitle";
import List from "../components/List";
import IconButton from "../components/IconButton";

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function handlePressButton() {
    console.log("button is pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton icon="star" color="white" onPress={handlePressButton} />
      ),
    });
  }, [navigation, handlePressButton]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetailsInfo
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <MealSubtitle>Ingredients</MealSubtitle>
          <List data={selectedMeal.ingredients} />

          <MealSubtitle>Steps</MealSubtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 50,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fa8282ff",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
