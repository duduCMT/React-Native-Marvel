import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { useSelector } from 'react-redux'
import { SHARED_ID } from '../components/Logo'

import Characters from '../screens/Characters'
import SignIn from '../screens/SignIn'

import { ApplicationState } from '../store'
import { forFade } from './animations'


type Props = {

}

export type CharactesScreenProp = StackNavigationProp<RootStackParamList, 'Charactes'>;

export type RootStackParamList = {
  Charactes: undefined;
  SignIn: undefined;
};
const { Navigator, Screen } = createSharedElementStackNavigator<RootStackParamList>()

export default function Routes({ }: Props) {
  const user = useSelector((state: ApplicationState) => state.user.data)

  return (
    <NavigationContainer
    >
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='SignIn' component={SignIn} />
        <Screen 
          name='Charactes' 
          component={Characters} 
          sharedElements={() => [SHARED_ID]} 
          options={{ cardStyleInterpolator: forFade }}
        />
      </Navigator>

    </NavigationContainer>
  )
}