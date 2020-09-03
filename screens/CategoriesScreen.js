import React from 'react';
import {
  View,
  FlatList,
  StyleSheet
} from 'react-native';

import CategoryGridTile from './../components/CategoryGridTile';

import Colors from './../constants/Colors';
import { CATEGORIES } from './../data/dummy-data';

const CategoriesScreen = props => {

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  }

  return (
    <View style={styles.categoryListContainer}>
      <FlatList
        keyExtractor={(item) => { item.id }}
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


// moved to navigation file
// CategoriesScreen.navigationOptions = {
//   headerTitle: 'Meal Categories',
// }


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryListContainer: {
    backgroundColor: Colors.white
  },
});

export default CategoriesScreen;
