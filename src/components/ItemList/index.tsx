import React from 'react'
import { View, Text, TouchableOpacityProps } from 'react-native'
import { Container, BackgroundImage, Content, Gradient, TextArea, Title, Description, ActionText } from './styles'

type Props = TouchableOpacityProps & {
  imageUrl: string;
  title: string;
  description: string;
}

export default function ItemList({imageUrl, title, description, activeOpacity, ...rest}: Props){
  return (
    <Container {...rest}>
      <BackgroundImage 
        source={{uri: imageUrl}}
      />

      <Content>
        <Gradient />
        <TextArea>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ActionText>ver detalhes</ActionText>
        </TextArea>
      </Content>
    </Container>
  )
}