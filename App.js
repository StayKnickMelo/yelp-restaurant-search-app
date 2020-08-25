import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailSceen';



const navigator = createStackNavigator({
  Search: SearchScreen,
  RestaurantDetail: RestaurantDetailScreen


}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
});


export default createAppContainer(navigator);