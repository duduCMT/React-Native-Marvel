import React from 'react'
import { View, Text, TouchableOpacityProps, TouchableOpacity } from 'react-native'
import { ButtonContainer, Gradient, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string,
  active?: boolean,
}

export default function Button({title, active = true, activeOpacity, ...rest}: Props){
  return (
    <ButtonContainer {...rest} >
      <Gradient active={active}/>
      <Title active={active}>{title}</Title>
    </ButtonContainer>
  )
}