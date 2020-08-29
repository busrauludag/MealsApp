import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The categories screen</Text>
      <Button title='Go To Meals!' onPress={() => {
        props.navigation.navigate({ routeName: 'CategoryMeals' });
        // alternative way is:  props.navigation.navigate('CategoryMeals')
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

export default CategoriesScreen;
