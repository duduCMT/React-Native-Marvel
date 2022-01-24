import { StackNavigationProp } from '@react-navigation/stack'
import { View } from 'react-native';
import { createLeftTabNavigation } from '../navigators/LeftTabNavigator';
import Characters from '../screens/Characters'
import { colors } from '../styles';

export type CharactesScreenProp = StackNavigationProp<HomeRootStackParamList, 'Charactes'>;

export type HomeRootStackParamList = {
  Charactes: undefined;
  Screen1: undefined;
};
const { Navigator, Screen } = createLeftTabNavigation<HomeRootStackParamList>()
const Screen1 = () => <View style={{flex: 1, backgroundColor: 'black'}} />

export default function HomeRoutes() {
  return (
    <Navigator tabBarStyle={{backgroundColor: colors.background}} backgroundColor='black'>
      <Screen name='Charactes' component={Characters} options={{title: "Personagens"}} />
      <Screen name='Screen1' component={Screen1} options={{title: "Tela 2"}}/>
    </Navigator>
  )
}