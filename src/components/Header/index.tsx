import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SharedElement } from 'react-navigation-shared-element'
import Logo, { SHARED_ID } from '../Logo'
import { Container, MenuIcon } from './styles'

type Props = {
  
}

export default function Header({}: Props){
  function handleMenuButton() {
    
  }

  return (
    <Container>
      <TouchableOpacity activeOpacity={0.7} onPress={handleMenuButton}>
        <MenuIcon />
      </TouchableOpacity>
      <SharedElement id={SHARED_ID}>
        <Logo small />
      </SharedElement>
    </Container>
  )
}