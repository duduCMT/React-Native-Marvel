import React from 'react'
import { View, Text } from 'react-native'
import { size } from '../../styles'
import PopularItem from '../PopularItem'
import Stars from '../Stars'
import { PopularList as Container } from './styles'

type Props = {

}

export default function PopularList({ }: Props) {
  return (
    <Container>
      <View>
        <PopularItem
          title='Wanda Maximoff'
          url='https://static.wikia.nocookie.net/marvel/images/c/cb/Avengers_Infinity_War_poster_020_Textless.jpg/revision/latest?cb=20190330034211&path-prefix=pt-br'
        />
        <Stars
          style={{
            position: 'absolute',
            bottom: 0,
            right: -120,
          }}
          title='Avaliação dos fãns'
          stars={4}
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
        url='https://i.pinimg.com/originals/23/82/43/23824309b57a0c1828dbee2c5c4f0026.jpg'
      />
      <PopularItem
        style={{
          height: 38,
          width: 38,
          marginLeft: 7,
          borderRadius: size.BORDER.small
        }}
        secondary
        url='https://i.pinimg.com/originals/23/82/43/23824309b57a0c1828dbee2c5c4f0026.jpg'
      />
    </Container>
  )
}