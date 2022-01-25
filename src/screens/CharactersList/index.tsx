import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Header, ListTitle, Container, BackButton } from './styles'

import Icon from '@expo/vector-icons/MaterialIcons';
import { colors, size } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import ItemList from '../../components/ItemList';
import { useCharacters } from '../../hooks/useCharacters';
import { UseRequestStatus } from '../../hooks';
import ErrorView from '../../components/ErrorView';
import ListItens from '../../components/ListItens';

type Props = {
}

export default function CharactersList({ }: Props) {
  const navigation = useNavigation()
  const { characters, getBestCharacters, stateCharacter } = useCharacters()

  useEffect(() => {
    getBestCharacters()
  }, [])

  function renderList(){
    switch(stateCharacter.status){
      case UseRequestStatus.LOADING:
        return <ActivityIndicator />
      
      case UseRequestStatus.ERROR:
        return (
          <ErrorView 
            code={stateCharacter.statusCode} 
            message={stateCharacter.message} 
          />
        )

      case UseRequestStatus.SUCCESS: 
        return <ListItens data={characters.map((c) => ({
          id: c.id,
          name: c.name,
          description: c.description,
          image: c.image
        }))}  />
    }
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {
          navigation.goBack()
        }}>
          <BackButton />
        </TouchableOpacity>
        <Icon name="people" size={31} color={colors.primary} />
        <ListTitle>Personagens</ListTitle>
      </Header>
        { renderList() }
    </Container>
  )
}