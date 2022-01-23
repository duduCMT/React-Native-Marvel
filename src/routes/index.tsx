import { NavigationContainer, NavigatorScreenParams, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { useSelector } from 'react-redux'
import { SHARED_ID } from '../components/Logo'

import { ApplicationState } from '../store'
import { forFade } from './animations'
import AppRoutes, { AppRootStackParamList } from './app.routes'
import AuthRoutes, { AuthRootStackParamList } from './auth.routes'

export type AppScreenProp = StackNavigationProp<RootStackParamList, 'AuthRoutes'>;

export type RootStackParamList = {
  AuthRoutes: NavigatorScreenParams<AuthRootStackParamList>;
  AppRoutes: NavigatorScreenParams<AppRootStackParamList>;
}

const { Navigator, Screen } = createSharedElementStackNavigator<RootStackParamList>()

export default function Routes() {
  const user = useSelector((state: ApplicationState) => state.user.data)

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="AuthRoutes" component={AuthRoutes} />
        <Screen 
          name="AppRoutes" component={AppRoutes} 
          sharedElements={() => [SHARED_ID]}
          options={{ cardStyleInterpolator: forFade }} 
        />
      </Navigator>
    </NavigationContainer>
  )
}