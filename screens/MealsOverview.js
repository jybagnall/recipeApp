import { View, FlatList, StyleSheet } from "react-native";

import { MEALS } from "../assets/data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverview({ route }) {
  const id = route.params.categoryId;

  const displayedRecipes = MEALS.filter((item) => {
    return item.categoryIds.includes(id);
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedRecipes}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          const meal = itemData.item;
          return (
            <MealItem
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
