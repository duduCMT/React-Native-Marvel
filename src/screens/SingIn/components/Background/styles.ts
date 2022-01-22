import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from "react-native"
import styled from 'styled-components/native';
import { colors } from "../../../../styles";
import { MotiView, MotiImage } from 'moti'


export const SolidBackgroundContainer = styled(MotiView).attrs({
  transition: { type: 'timing', duration: 800, },  
})`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  background-color: ${colors.background};
`

export const BackgroundImage = styled(MotiImage).attrs({
  transition: { type: 'timing', duration: 800, },
})<{center?: boolean}>
`
  opacity: 0.25;
  ${props => props.center ? 'align-self: center' : ''};
`

export const GradientContainer = styled(MotiView).attrs({
  transition: { type: 'timing', duration: 800, },
})``

export const Gradient = styled(LinearGradient).attrs({
  colors: [colors.background, 'transparent'],
  locations: [0.1, 0.3],
})<{width?: number; height?: number}>
`
  position: absolute;
  bottom: 16px;
  ${({width}) => width ? `width: ${width}px` : ''}
  ${({height}) => height ? `height: ${height}px` : ''}
`
