import { MotiImage } from 'moti'
import { StyleSheet } from "react-native"
import styled from 'styled-components/native'
import { colors, fonts, size } from '../../styles'

const { create } = size

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  justify-content: center;
  flex-direction: row;
`

export const Content = styled.View`
  background-color: ${colors.background};
  justify-content: flex-start;
`

export const Title = styled.Text`
  font-family: ${fonts.title700};
  font-size: ${size.FONT_SIZE.large}px;
  color: ${colors.text};
  margin-bottom: ${create(28)}px;
`

export const DescriptionArea = styled.View`
  margin-top: ${create(30)}px;
`

export const Description = styled.Text`
  font-family: ${fonts.text100};
  font-size: ${size.FONT_SIZE.regular}px;
  color: ${colors.text};
  line-height: ${create(20)}px;
`

export const ViewMore = styled.Text`
  font-family: ${fonts.text100};
  font-size: ${size.FONT_SIZE.small}px;
  color: ${colors.primary};
  margin-top: ${create(11)}px;
`

export const Subtitle = styled(Title)`
  font-size: ${size.FONT_SIZE.big}px;
`


