import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
export default function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
