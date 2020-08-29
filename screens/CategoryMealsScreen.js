import React from 'react';
import {
  Text,
  View,
  Button,
  Platform,
  StyleSheet
} from 'react-native';

import Colors from './../constants/Colors';

import { CATEGORIES } from './../data/dummy-data';

const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The category maeals screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title='Go To Meal Detail!' onPress={() => {
        props.navigation.navigate({ routeName: 'MealDetail' });
        // alternative way is:  props.navigation.navigate('MealDetail')
      }} />
      <Button title='Go To Back!' onPress={() => {
        props.navigation.goBack();
      }} />
    </View>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.white
    },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor
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
