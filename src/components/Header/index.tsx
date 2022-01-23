import React from 'react'
import { View, Text } from 'react-native'
import Logo from '../Logo'
import { Container, MenuIcon } from './styles'

type Props = {
  
}

export default function Header({}: Props){
  return (
    <Container>
      <MenuIcon />  
      <Logo small />
    </Container>
  )
}