import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native';

import Colors from './../constants/Colors';

import { CATEGORIES } from './../data/dummy-data';

const CategoriesScreen = props => {

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.categoryListContainer}>
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


CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.white
  },
  headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor
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
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
