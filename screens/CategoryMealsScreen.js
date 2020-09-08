import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from './../data/dummy-data';

import MealList from './../components/MealList';

import Colors from './../constants/Colors';

const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);
  // useSelector allows us to select a slice of our state, this can select meals part from state

  const displayedMeals = availableMeals.filter(
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
