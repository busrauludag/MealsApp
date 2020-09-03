import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';

import { CATEGORIES, MEALS } from './../data/dummy-data';

const CategoryMealsScreen = props => {

  const renderMealItem = itemData => {
    return (
      <View><Text>{itemData.item.title}</Text></View>
    );
  }

  const catId = props.navigation.getParam('categoryId');
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList 
        keyExtractor={(item) => item.id} 
        renderItem={renderMealItem}
        data={displayedMeals}
      />

      {/* <Button title='Go To Meal Detail!' onPress={() => {
        props.navigation.navigate({ routeName: 'MealDetail' });
        // alternative way is:  props.navigation.navigate('MealDetail')
      }} />
      <Button title='Go To Back!' onPress={() => {
        props.navigation.goBack();
      }} /> */}
    </View>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
