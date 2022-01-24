import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PopularList from '../../components/PopularList'
import api from '../../services/api'
import { colors, size } from '../../styles'
import { 
  Apparitions,
  Container, 
  Content, 
  Description, 
  DescriptionArea, 
  Subtitle, 
  Title, 
  ViewMore 
} from './styles'

type Props = {

}

export default function Characters({ }: Props) {
  const [characters, setCharacters] = useState<Character[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    function requestCaracters(){
      api.get('/caracters').then((response) => {  
        const data = response.data as Character[] 
        const filter: Character[] = data.sort((n1, n2) => n2.stars - n1.stars)
        setTimeout(() => {
          setCharacters(filter)
        }, 300)
      })
    }
    requestCaracters()
  }, [])

  return (
    <Container>
      { characters.length > 0 ?
      <Content>
        <Title>Top 10 - Filmes Populares</Title> 
        <PopularList characters={characters} />

        <DescriptionArea>
          <Description>
            { characters[0].description } 
          </Description>
          <TouchableOpacity activeOpacity={0.7}>
            <ViewMore>
              Ver Mais
            </ViewMore>
          </TouchableOpacity>
        </DescriptionArea>

        <Apparitions 
          title="Aparições:" 
          pairs={characters[0].appearances} 
        />
      </Content>
      : 
        <> 
          <ActivityIndicator size='large' color={colors.primary} />
        </>
      }
    </Container>
  )
}