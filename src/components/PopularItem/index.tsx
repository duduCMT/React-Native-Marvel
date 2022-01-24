import React, { useState } from 'react'
import { ActivityIndicator, ViewProps } from 'react-native'
import { BackgroundImage, Container, Gradient, GradientContainer, Title } from './styles'


type Props = ViewProps & {
  title?: string;
  url?: string;
  secondary?: boolean;
}

export default function PopularItem({ title, url, secondary = false, ...rest }: Props) {
  const [loading, setLoading] = useState(true)
  
  return (
    <Container secondary={secondary} {...rest}>
      <BackgroundImage 
        source={{ uri: url }} 
        onLoadStart={() => setLoading(true)} 
        onLoadEnd={() => setLoading(false)} 
      />
      {
        loading 
        ? <ActivityIndicator />
        : null
      }
      
      {
        !secondary && <>
          <GradientContainer>
            <Gradient />
          </GradientContainer>
          <Title>{title}</Title>
        </>
      }
    </Container>
  )
}