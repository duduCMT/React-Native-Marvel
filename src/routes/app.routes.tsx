import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import Header from '../components/Header';
import Characters from '../screens/Characters'

export type CharactesScreenProp = StackNavigationProp<AppRootStackParamList, 'Charactes'>;

export type AppRootStackParamList = {
  Charactes: undefined;
};
const { Navigator, Screen } = createStackNavigator<AppRootStackParamList>()

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ 
      header: () => <Header />
      
    }}>
      <Screen name='Charactes' component={Characters} />
    </Navigator>
  )
}