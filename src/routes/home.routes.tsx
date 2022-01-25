import { StackNavigationProp } from '@react-navigation/stack'
import { View } from 'react-native';
import { createLeftTabNavigation } from '../navigators/LeftTabNavigator';
import Characters from '../screens/Characters'
import { colors } from '../styles';

export type CharactesScreenProp = StackNavigationProp<HomeRootStackParamList, 'Charactes'>;

export type HomeRootStackParamList = {
  Charactes: undefined;
  Movies: undefined;
  Hqs: undefined;
};
const { Navigator, Screen } = createLeftTabNavigation<HomeRootStackParamList>()

//Telas Paenas para Teste
const Movies = () => <View style={{flex: 1, backgroundColor: colors.background}} />
const Hqs = () => <View style={{flex: 1, backgroundColor: colors.background}} />

export default function HomeRoutes() {
  return (
    <Navigator tabBarStyle={{backgroundColor: colors.background}} backgroundColor={colors.background}>
      <Screen name='Charactes' component={Characters} options={{title: "Personagens"}} />
      <Screen name='Movies' component={Movies} options={{title: "Filmes"}}/>
      <Screen name='Hqs' component={Hqs} options={{title: "Quadrinhos"}}/>
    </Navigator>
  )
}