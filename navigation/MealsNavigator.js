import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from './../screens/CategoriesScreen';
import CategoryMealsScreen from './../screens/CategoryMealsScreen';
import MealDetailScreen from './../screens/MealDetailScreen';

import Colors from './../constants/Colors';

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
    defaultNavigationOptions: {
      navigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.white
        },
        headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor
      }
    }
  }
);

// Longer form
// CategoryMeals: {
//   screen: CategoryMealsScreen
// }

export default createAppContainer(MealsNavigator);