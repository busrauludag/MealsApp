import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Text, View, Button, StyleSheet } from 'react-native';

import { MEALS } from './../data/dummy-data';

import HeaderButton from './../components/HeaderButton';

const MealDetailScreen = props => {

  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title='Go Back To Categories!' onPress={() => {
        props.navigation.popToTop(); // goes to top screen
      }} />
    </View>
  );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Favorite' iconName='ios-star' onPress={() => {
          console.log('Mark as Favorite')
        }} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
