import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';

export type RootStackParamList = {
  SingIn: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export default function AuthRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='SingIn'
        component={SignIn}
      />
    </Navigator>
  );
}