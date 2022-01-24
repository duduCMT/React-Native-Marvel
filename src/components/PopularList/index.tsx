import React from 'react'
import { View, Text } from 'react-native'
import { size } from '../../styles'
import PopularItem from '../PopularItem'
import Stars from '../Stars'
import { PopularList as Container } from './styles'

type Props = {
  characters: Character[]
}

export default function PopularList({ characters }: Props) {
  return (
    <Container>
      <View>
        <PopularItem
          title={characters[0].name}
          url={characters[0].image}
        />
        <Stars
          style={{
            position: 'absolute',
            bottom: 0,
            right: -120,
          }}
          title='Avaliação dos fãns'
          stars={characters[0].stars}
        />
      </View>

      <PopularItem
        style={{
          height: 81,
          width: 81,
          marginLeft: 7,
          borderRadius: size.BORDER.regular
        }}
        secondary
        url={characters[1].image}
      />
      <PopularItem
        style={{
          height: 38,
          width: 38,
          marginLeft: 7,
          borderRadius: size.BORDER.small
        }}
        secondary
        url={characters[2].image}
      />
    </Container>
  )
}