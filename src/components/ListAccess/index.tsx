import React from 'react'
import { View, Text, ImageBackground, ViewStyle, ViewProps } from 'react-native'
import { Container, Title, Header, ViewMoreButton, ImagesArea, Image, TextSubtitle } from './styles'
import Icon from '@expo/vector-icons/Entypo';

type Props = ViewProps & {
  title: string;
  onViewMorePress?: () => void;
}

export default function ListAccess({ title, onViewMorePress, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Header>
        <Title>{title}</Title>
        <ViewMoreButton onPress={onViewMorePress}>
          <Icon name="plus" size={24} color="white" />
          <Title>Ver Todos</Title>
        </ViewMoreButton>
      </Header>
      <ImagesArea>
        <View style={{marginRight: 27}}>
          <Image source={{ uri: 'https://i.pinimg.com/originals/9b/9c/57/9b9c57d1c851e5630bff5fe7784639bb.jpg' }} />
          <TextSubtitle>Homem-Aranha</TextSubtitle>
        </View>
        <View>
          <Image source={{ uri: 'https://img.elo7.com.br/product/zoom/3BC77CB/poster-avengers-vingadores-incrivel-hulk-geek-tamanho-a4-cacadores-da-arca-perdida.jpg' }} />
          <TextSubtitle>Hulk</TextSubtitle>
        </View>
      </ImagesArea>
    </Container>
  )
}