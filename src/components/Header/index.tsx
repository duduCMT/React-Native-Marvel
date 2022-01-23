import React from 'react'
import { View, Text } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import Logo, { SHARED_ID } from '../Logo'
import { Container, MenuIcon } from './styles'

type Props = {
  
}

export default function Header({}: Props){
  return (
    <Container>
      <MenuIcon />  
      <SharedElement id={SHARED_ID}>
        <Logo small />
      </SharedElement>
    </Container>
  )
}