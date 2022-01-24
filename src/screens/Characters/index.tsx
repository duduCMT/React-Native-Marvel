import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../components/Header'
import PopularItem from '../../components/PopularItem'
import PopularList from '../../components/PopularList'
import Stars from '../../components/Stars'
import { size } from '../../styles'
import { Container, Content, Description, DescriptionArea, Subtitle, Title, ViewMore } from './styles'

type Props = {

}

export default function Characters({ }: Props) {
  return (
    <Container>
      <Content>
        <Title>Top 10 - Filmes Populares</Title> 
        <PopularList />

        <DescriptionArea>
          <Description>
            Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. 
          </Description>
          <TouchableOpacity activeOpacity={0.7}>
            <ViewMore>
              Ver Mais
            </ViewMore>
          </TouchableOpacity>
        </DescriptionArea>
        {/* <Subtitle>Aparições</Subtitle> */}
      </Content>
    </Container>
  )
}