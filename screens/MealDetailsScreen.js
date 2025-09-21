import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { useLayoutEffect, useContext } from "react";
import { MEALS } from "../assets/data/dummy-data";
import MealDetailsInfo from "../components/MealDetailsInfo";
import MealSubtitle from "../components/MealSubtitle";
import DetailList from "../components/DetailList";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav } from "../store/redux/favs";

export default function MealDetailsScreen({ route, navigation }) {
  const favMealIds = useSelector((state) => state.favMeals.favIds);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const isFavorite = favMealIds.includes(mealId);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function toggleFavorite() {
    if (isFavorite) {
      dispatch(removeFav(mealId));
    } else {
      dispatch(addFav(mealId));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="star"
          color={isFavorite ? "#ebf68eff" : "white"}
          onPress={toggleFavorite}
        />
      ),
    });
  }, [navigation, toggleFavorite, isFavorite]);

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
          <DetailList data={selectedMeal.ingredients} />

          <MealSubtitle>Steps</MealSubtitle>
          <DetailList data={selectedMeal.steps} />
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
