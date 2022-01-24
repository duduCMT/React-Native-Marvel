import * as React from 'react';
import { View, Text, Pressable, } from 'react-native';
import {
  createNavigatorFactory,
  ParamListBase,
  TabActions,
  TabActionHelpers,
  TabNavigationState,
  TabRouter,
  TabRouterOptions,
  useNavigationBuilder,
  NavigationHelpersContext,
} from '@react-navigation/native';

import {
  LeftTapNavigatorProps,
  TabNavigationEventMap,
  TabNavigationOptions
} from './types';
import { colors } from '../../styles';
import Button from './components/Button';

function LeftTabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle = {},
  contentStyle = {},
}: LeftTapNavigatorProps) {
  const { state, navigation, descriptors, NavigationContent } = useNavigationBuilder<
    TabNavigationState<ParamListBase>,
    TabRouterOptions,
    TabActionHelpers<ParamListBase>,
    TabNavigationOptions,
    TabNavigationEventMap
  >(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  }
  );

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
        <View style={[{
          justifyContent: 'center',
          alignItems: 'flex-start',
        }, tabBarStyle]}>
          {state.routes.map((route) => (
            <Button
              active={route.key === state.routes[state.index].key}
              key={route.key}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                  data: {
                    isAlreadyFocused: route.key === state.routes[state.index].key,
                  },
                });

                if (!event.defaultPrevented) {
                  navigation.dispatch({
                    ...TabActions.jumpTo(route.name),
                    target: state.key,
                  });
                }
              }}
              title={descriptors[route.key].options.title || route.name}
            />
          ))}
        </View>
        <View style={[{ flex: 1 }, contentStyle]}>
          {descriptors[state.routes[state.index].key].render()}
        </View>
      </View>
    </NavigationHelpersContext.Provider>
  );
}

export const createLeftTabNavigation = createNavigatorFactory<
  TabNavigationState<ParamListBase>,
  TabNavigationOptions,
  TabNavigationEventMap,
  typeof LeftTabNavigator
>(LeftTabNavigator);