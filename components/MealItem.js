import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#efbebeff" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>

        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailText}>{duration} mins</Text>
          <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
        </View>
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
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  detailText: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.8,
  },
});
