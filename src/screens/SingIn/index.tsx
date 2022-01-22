import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './styles'
import Background from './components/Background'

const logo = require('../../assets/img/logo.png')

type Props = {
}

export default function SingIn({ }: Props) {
  return (
    <View style={styles.container}>
      <Background>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={logo}
          />
        </View>
      </Background>
    </View>
  )
}