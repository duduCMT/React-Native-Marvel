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
import { colors, fonts, size } from '../../styles';
import Button from './components/Button';
import { MotiView } from 'moti';

function LeftTabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle = {},
  contentStyle = {},
  backgroundColor = 'transparent'
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
        backgroundColor: backgroundColor
      }}>
        <View style={[{
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingRight: size.create(32),
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
        <MotiView 
          from={{ opacity: 0 }}
          animate={{opacity: 1}}
          transition={{type: 'timing', duration: 800}}
          style={[{ flex: 1 }, contentStyle]}
        >
          {descriptors[state.routes[state.index].key].render()}
        </MotiView>
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