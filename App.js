import { and } from 'react-native-reanimated';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from'./src/screens/SearchScreen';

import ResultsShowScreen from './src/screens/ResultShowScreen';



const navigator = createStackNavigator({
  Search:SearchScreen,
  ResultsShow:ResultsShowScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }

});

export default createAppContainer(navigator);