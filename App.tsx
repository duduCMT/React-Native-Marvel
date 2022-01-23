import React, { useState } from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { colors } from './src/styles';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import store from './src/store';
import Routes from './src/routes';

const customFonts = {
  'Axiforma-Bold': require('./src/assets/fonts/Axiforma-Bold.otf'),
  'Axiforma-Regular': require('./src/assets/fonts/Axiforma-Regular.otf'),
  'Axiforma-Light': require('./src/assets/fonts/Axiforma-Light.otf'),
  'Axiforma-Medium': require('./src/assets/fonts/Axiforma-Medium.otf'),
  'Axiforma-Thin': require('./src/assets/fonts/Axiforma-Thin.otf'),
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  async function loadFonts() {
    await Font.loadAsync(customFonts)
    setFontLoaded(true)
  }

  loadFonts()

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={colors.background}
        />
        {
          fontLoaded
            ? <Routes />
            : <AppLoading />
        }
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  }
})

