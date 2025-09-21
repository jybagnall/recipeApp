import { View, Text, StyleSheet } from "react-native";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

// {selectedMeal.ingredients.map((ingredient) => (
//             <Text key={ingredient}>{ingredient}</Text>
//           ))}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#f9f2ecff",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
