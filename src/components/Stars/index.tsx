import React from 'react'
import { ViewProps } from 'react-native'
import { Container, Star, StarList, Title } from './styles'

type Props = ViewProps & {
  title: string,
  stars?: number,
}

export default function Stars({title, stars = 0, ...rest}: Props){
  const showStars: boolean[] = []
  
  for(let i = 1; i <= 5; i++){
    showStars.push(i <= stars)
  }
  
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <StarList>
        { showStars.map((active, k) => <Star active={active} key={k} />)}
      </StarList>
    </Container>
  )
}