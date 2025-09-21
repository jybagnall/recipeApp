import { View, Text, Image, StyleSheet, Pressable } from "react-native";

// 화면 컴포넌트가 아닌 일반 컴포넌트 안에서 이동을 위해서 훅을 씀.
import { useNavigation } from "@react-navigation/native";
import MealDetailsInfo from "./MealDetailsInfo";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function handlePress(id) {
    navigation.navigate("detail", {
      mealId: id, // params 전달
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#efbebeff" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => handlePress(id)}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>

        <Text style={styles.title}>{title}</Text>
        <MealDetailsInfo
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#ece7e7ff",
    overflow: "hidden",
    elevation: 4,
  },
  button: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  buttonPressed: {
    opacity: 0.8,
  },
});
