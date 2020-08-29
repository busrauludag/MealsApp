import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The category maeals screen</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
