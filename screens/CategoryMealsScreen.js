import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from './../data/dummy-data';

import MealList from './../components/MealList';
import DefaultText from '../components/DefaultText';

import Colors from './../constants/Colors';

const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);
  // useSelector allows us to select a slice of our state, this can select meals part from state

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  if(displayedMeals.length === 0){
    return(
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    )
  }

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
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
