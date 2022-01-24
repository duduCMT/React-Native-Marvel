import { DefaultNavigatorOptions, ParamListBase, TabActionHelpers, TabNavigationState, TabRouterOptions } from "@react-navigation/native";
import { StyleProp, ViewStyle } from "react-native";

// Props de Estilo
type TabNavigationConfig = {
  tabBarStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}

// Screen Options
export type TabNavigationOptions = {
  title?: string;
  backgroundColor?: string;
}

// Mapa de Eventos
export type TabNavigationEventMap = {
  tabPress: {
    data: { isAlreadyFocused: boolean };
    canPreventDefault: true;
  };
}

// Props do Componente
export type LeftTapNavigatorProps = DefaultNavigatorOptions<
  ParamListBase,
  TabNavigationState<ParamListBase>,
  TabNavigationOptions,
  TabNavigationEventMap
> & TabRouterOptions & TabNavigationConfig & {
  backgroundColor?: string
}
