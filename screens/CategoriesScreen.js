import { FlatList, ScrollView, StyleSheet } from "react-native";
import { CATEGORIES } from "../assets/data/dummy-data";
import CategoryTile from "../components/CategoryTile";

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={(itemData) => (
        <CategoryTile color={itemData.item.color} title={itemData.item.title} />
      )}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, paddingVertical: 32 },
});
