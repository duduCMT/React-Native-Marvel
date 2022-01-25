import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import Header from '../components/Header';
import CharactersList from '../screens/CharactersList';
import HomeRoutes, { HomeRootStackParamList } from './home.routes';

export type AppRootStackParamList = {
  Home: NavigatorScreenParams<HomeRootStackParamList>;
  CharactersList: undefined;
};
const { Navigator, Screen } = createStackNavigator<AppRootStackParamList>()

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ 
      header: () => <Header />
    }}>
      <Screen name='Home' component={HomeRoutes} />
      <Screen name='CharactersList' component={CharactersList} />
    </Navigator>
  )
}