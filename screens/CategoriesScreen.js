import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from './../data/dummy-data';

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>
        {itemData.item.title}
      </Text>
    </View>
  );
}

const CategoriesScreen = props => {
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => { item.id }}
        renderItem={renderGridItem}
        data={CATEGORIES}
        numColumns={2}
      />

      {/* <Button title='Go To Meals!' onPress={() => {
        props.navigation.navigate({ routeName: 'CategoryMeals' });
        // alternative way is:  props.navigation.navigate('CategoryMeals')
        // props.navigation.replace(CategoryMeals'); we cant go back
      }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
