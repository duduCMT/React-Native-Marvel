import React from 'react'
import { Text } from 'react-native'
import Header from '../../components/Header'
import { Container } from './styles'

type Props = {

}

export default function Characters({ }: Props) {
  return (
    <Container>
      <Header />
      <Text>Characters</Text>
    </Container>
  )
}