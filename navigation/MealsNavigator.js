import React from 'react';
import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './../screens/CategoriesScreen';
import CategoryMealsScreen from './../screens/CategoryMealsScreen';
import MealDetailScreen from './../screens/MealDetailScreen';
import FavoritesScreen from './../screens/FavoritesScreen';

import Colors from './../constants/Colors';

const defaultStackNavOptions = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.white
    },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor
  }
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    }
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);


const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);


const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        )
      },
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
        )
      },
      tabBarColor: Colors.accentColor
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
      tabScreenConfig,
      {
        tabBarOptions: {
          activeTintColor: Colors.white,
          shifting: true,
          barStyle: {
            backgroundColor: Colors.primaryColor
          }
        }
      }
    )
    : createBottomTabNavigator(
      tabScreenConfig,
      {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      }
    );

export default createAppContainer(MealsFavTabNavigator);