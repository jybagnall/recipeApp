import { FlatList, ScrollView, StyleSheet } from "react-native";
import { CATEGORIES } from "../assets/data/dummy-data";
import CategoryTile from "../components/CategoryTile";

// 컴포넌트가 화면(Screen) 컴포넌트 navigation을 그냥 사용할 수 있음
export default function CategoriesScreen({ navigation }) {
  function handlePress(id) {
    navigation.navigate("overview", {
      categoryId: id, // params 전달
    });
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={(itemData) => (
        <CategoryTile
          color={itemData.item.color}
          title={itemData.item.title}
          onPress={() => handlePress(itemData.item.id)}
        />
      )}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, paddingVertical: 32 },
});
