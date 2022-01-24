import React from 'react'
import { View, Text } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons'; 
import { colors } from '../../styles';
import { ErrorContainer, ErrorMessage, ErrorTitle } from './styles'

type Props = {
  code?: number,
  message?: string, 
}

export default function ErrorView({code, message}: Props){
  return (
    <ErrorContainer>
      <Icon name="error" size={64} color={colors.primary} />
      <ErrorTitle>Erro {code}</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  )
}