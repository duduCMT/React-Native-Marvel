import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import Characters from '../screens/Characters'

export type CharactesScreenProp = StackNavigationProp<AppRootStackParamList, 'Charactes'>;

export type AppRootStackParamList = {
  Charactes: undefined;
};
const { Navigator, Screen } = createStackNavigator<AppRootStackParamList>()

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Charactes' component={Characters} />
    </Navigator>
  )
}