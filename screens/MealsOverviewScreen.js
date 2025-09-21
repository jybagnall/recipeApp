import { View, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../assets/data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route, navigation }) {
  const id = route.params.categoryId;

  const displayedRecipes = MEALS.filter((item) =>
    item.categoryIds.includes(id)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((c) => c.id === id).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [id, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedRecipes}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          const meal = itemData.item;
          return (
            <MealItem
              id={meal.id}
              title={meal.title}
              imageUrl={meal.imageUrl}
              duration={meal.duration}
              complexity={meal.complexity}
              affordability={meal.affordability}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
