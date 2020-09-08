import React from 'react';
import {
  View,
  FlatList,
  StyleSheet
} from 'react-native';

import MealItem from './../components/MeaItem';

const MealList = props => {

  const renderMealItem = itemData => {
    return (
      <MealItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail', 
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title // Option 2: set meal title to params to get it detail page
            }
          })
        }}
      />
    );
  };


  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        data={props.listData}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealList;