import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
export default function MealsList({ items }) {
  function renderMealItem(itemData) {
    // Shorthand for itemData.item to not repeat that everyitme
    const item = itemData.item;
    // Too many props for <MealItem/>, therefore I created helper cosnt with all the props
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
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
