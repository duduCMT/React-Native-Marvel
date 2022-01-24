import { MotiImage } from 'moti'
import { StyleSheet } from "react-native"
import styled from 'styled-components/native'
import { colors, fonts, size } from '../../styles'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`

export const Content = styled.View`
  flex: 1;
  background-color: ${colors.background};
`

export const Title = styled.Text`
  font-family: ${fonts.title700};
  font-size: ${size.FONT_SIZE.large}px;
  color: ${colors.text};
`

export const PopularList = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`

