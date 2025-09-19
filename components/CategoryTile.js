import { View, Pressable, Text, StyleSheet } from "react-native";

export default function CategoryTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#e3e2e2ff" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          { backgroundColor: color },
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 14,
    height: 100,
    borderRadius: 8,
    overflow: "hidden",
  },
  innerContainer: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
});
