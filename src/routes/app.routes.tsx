import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import Header from '../components/Header';
import HomeRoutes, { HomeRootStackParamList } from './home.routes';

export type AppRootStackParamList = {
  Home: NavigatorScreenParams<HomeRootStackParamList>;
};
const { Navigator, Screen } = createStackNavigator<AppRootStackParamList>()

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ 
      header: () => <Header />
    }}>
      <Screen name='Home' component={HomeRoutes} />
    </Navigator>
  )
}