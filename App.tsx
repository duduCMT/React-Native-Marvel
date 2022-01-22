import { StatusBar, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import SingIn from './src/screens/SingIn';
import { colors, metrics } from './src/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor={colors.background} 
      />
      <SingIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, 
  }
})

