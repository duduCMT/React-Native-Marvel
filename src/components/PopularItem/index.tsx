import React from 'react'
import { ViewProps } from 'react-native'
import { BackgroundImage, Container, Gradient, Title } from './styles'


type Props = ViewProps & {
  title?: string;
  url?: string;
  secondary?: boolean;
}

export default function PopularItem({ title, url, secondary = false, ...rest }: Props) {
  return (
    <Container secondary={secondary} {...rest}>
      <BackgroundImage source={{ uri: url }} />
      {
        !secondary && <>
          <Gradient />
          <Title>{title}</Title>
        </>
      }
    </Container>
  )
}