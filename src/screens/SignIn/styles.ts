import { FONT_SIZE } from './../../styles/size'
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { MotiView } from 'moti'
import { colors, fonts, size } from "../../styles"
import { utils } from './utils'

const { create } = size

export const Container = styled.View`flex: 1;`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${utils.marginTop}px;
`

export const Form = styled(MotiView).attrs({
  transition: { type: 'timing', duration: 800, },
  delay: 300,
})`
  width: 100%;
  align-items: center;
  margin-top: ${create(62)}px; 
`

export const Title = styled.Text`
  color: ${colors.text};
  font-size: ${size.FONT_SIZE.large}px;
  font-family: ${fonts.title500};
`

export const Subtitle = styled.Text`
  color: ${colors.text};
  font-size: ${size.FONT_SIZE.regular}px;
  margin-top: ${create(10)}px;
  font-family: ${fonts.text300};
`
export const Input = styled(TextInput).attrs({
  selectionColor: colors.primary,
})`
  height: ${create(38)}px;
  width: 80%;
  max-width: ${create(246)}px;
  background-color: white;
  border-radius: ${create(19)}px;
  padding-left: ${create(21)}px;
  padding-right: ${create(21)}px;
  color: #000;
`

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  height: ${create(38)}px;
  width: 80%;
  max-width: ${create(246)}px;
  background-color: ${colors.primary};
  border-radius: ${create(19)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${create(23)}px;
`

export const ButtonText = styled(Text)`
  color: ${colors.text};
  font-size: ${size.FONT_SIZE.big}px;
  font-family: ${fonts.text300};
`
export const SingUpArea = styled(View)`
  flex-direction: row;
  margin-top: ${create(19)}px;
`
export const SingUp = styled(Text) <{ span?: boolean }>`
  color: ${(props) => (props.span ? colors.primary : colors.text)};
  font-size: ${size.FONT_SIZE.big}px;
  font-family: ${props => (props.span ? fonts.title500 : fonts.text300)};
`