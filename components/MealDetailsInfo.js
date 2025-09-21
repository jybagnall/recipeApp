import { View, Text, StyleSheet } from "react-native";

export default function MealDetailsInfo({
  duration,
  complexity,
  affordability,
}) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailText}>{duration} mins</Text>
      <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
