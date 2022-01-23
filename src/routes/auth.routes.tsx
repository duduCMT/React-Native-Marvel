import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import SignIn from '../screens/SignIn'

export type AuthRootStackParamList = {
  SignIn: undefined;
};

export type SignInScreenProp = StackNavigationProp<AuthRootStackParamList, 'SignIn'>;

const { Navigator, Screen } = createStackNavigator<AuthRootStackParamList>()

export default function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='SignIn' component = { SignIn } />
    </Navigator>
  )
}