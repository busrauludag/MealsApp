import React from 'react';
import {
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoryGridTile from './../components/CategoryGridTile';
import HeaderButton from './../components/HeaderButton';

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


CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => {
          navData.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    )
  }
}


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
