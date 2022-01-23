import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

type Props = {
  
}

export default function Characters({}: Props){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Characters</Text>
    </View>
  )
}