import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/Header'
import PopularItem from '../../components/PopularItem'
import Stars from '../../components/Stars'
import { size } from '../../styles'
import { Container, Content, PopularList, Title } from './styles'

type Props = {

}

export default function Characters({ }: Props) {
  return (
    <Container>
      <Header />
      {/* <Title>Top 10 - Filmes Populares</Title> */}
      <Content>
        <PopularList>
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
          
        </PopularList>
      </Content>
    </Container>
  )
}