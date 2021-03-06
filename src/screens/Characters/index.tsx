import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import ErrorView from '../../components/ErrorView'
import PopularList from '../../components/PopularList'
import { useBestCharacters, UseRequestStatus } from '../../hooks'
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

import ListAccess from '../../components/ListAccess'
import { AppScreenProp } from '../../routes'

type Props = {

}

export default function Characters({ }: Props) {
  const navigation = useNavigation<AppScreenProp>()

  const  { 
    bestCharacters, 
    stateBestCharacter, 
    getBestCharacters 
  } = useBestCharacters()

  useEffect(() => {
    getBestCharacters()
  }, [])

  return (
    <Container>
      { stateBestCharacter.status === UseRequestStatus.SUCCESS ? (
        <ScrollView>
          <Content>
            <Title>Top 10 - Personagens Populares</Title> 
            <PopularList characters={bestCharacters} />

            <DescriptionArea>
              <Description>
                {bestCharacters.best.description}
              </Description>
              <TouchableOpacity activeOpacity={0.7}>
                <ViewMore>Ver Mais</ViewMore>
              </TouchableOpacity>
            </DescriptionArea>

            <Apparitions 
              title="Aparições:" 
              pairs={bestCharacters.best.appearances} 
            />

            <ListAccess 
              style={{marginTop: size.create(43) }}
              title="Personagens"
              onViewMorePress={() => {
                navigation.push('AppRoutes', { screen: 'CharactersList' })
              }}
            />
          </Content>
        </ScrollView>
      ) : stateBestCharacter.status === UseRequestStatus.LOADING ? (
        <ActivityIndicator 
          size='large' 
          color={colors.primary} 
        />
      ) : (
        <ErrorView 
          code={stateBestCharacter.statusCode}
          message={stateBestCharacter.message} 
        />
      )}
    </Container>
  )
}