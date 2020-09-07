import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from './../data/dummy-data';

import MealList from './../components/MealList';

import Colors from './../constants/Colors';

const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId');
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <ScrollView style={styles.screen}>
      <MealList listData={displayedMeals} navigation={props.navigation} />
    </ScrollView>
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
    backgroundColor: Colors.white
  }
});

export default CategoryMealsScreen;
