import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The meal detail screen</Text>
      <Button title='Go Back To Categories!' onPress={() => {
        props.navigation.popToTop(); // goes to top screen
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

export default MealDetailScreen;
