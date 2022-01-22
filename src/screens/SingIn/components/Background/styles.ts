import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from "react-native"
import styled from 'styled-components/native';
import { colors } from "../../../../styles";
import { MotiView, MotiImage } from 'moti'

export const SolidBackgroundContainer = styled(MotiView)`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  background-color: ${colors.background};
`

export const BackgroundImage = styled(MotiImage)`
  opacity: 0.25;
`

export const Gradient = styled(LinearGradient).attrs({
  colors: [colors.background, 'transparent'],
  locations: [0.1, 0.3],
})`
  position: absolute;
  bottom: 16px;
`
