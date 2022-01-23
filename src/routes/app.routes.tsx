import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Charactes from '../screens/Characters'

export type RootStackParamList = {
  Charactes: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export default function AppRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='Charactes'
        component={Charactes}
      />
    </Navigator>
  );
}