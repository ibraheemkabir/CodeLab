import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home/HomeScreen';
import ListScreen from '../screens/List/ListScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';



export default createAppContainer(
  createStackNavigator({
   Main: HomeScreen,
   List: ListScreen,
   Profile: ProfileScreen
  })
);
