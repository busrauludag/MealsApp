import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';

import { CATEGORIES, MEALS } from './../data/dummy-data';

import MealItem from './../components/MeaItem';

const CategoryMealsScreen = props => {

  const renderMealItem = itemData => {
    return (
      <MealItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectModal={() => { }}
      />
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
        style={{ width: '100%' }}
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
