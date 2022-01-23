import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { MotiView } from 'moti'
import { colors, fonts } from "../../styles"
import { utils } from './utils'

export const Container = styled(View)`flex: 1;`

export const Content = styled(View)`
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
  margin-top: 62px; 
`

export const Title = styled(Text)`
  color: ${colors.text};
  font-size: 18px;
  font-family: ${fonts.title500};
`

export const Subtitle = styled(Text)`
  color: ${colors.text};
  font-size: 14px;
  margin-top: 10px;
  font-family: ${fonts.text300};
`
export const Input = styled(TextInput).attrs({
  selectionColor: colors.primary,
})`
  height: 38px;
  width: 80%;
  max-width: 246px;
  background-color: white;
  border-radius: 19px;
  padding-left: 21px;
  padding-right: 21px;
  color: #000;
`

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  height: 38px;
  width: 80%;
  max-width: 246px;
  background-color: ${colors.primary};
  border-radius: 19px;
  justify-content: center;
  align-items: center;
  margin-top: 23px;
`

export const ButtonText = styled(Text)`
  color: ${colors.text};
  font-size: 16px;
  font-family: ${fonts.text300};
`
export const SingUpArea = styled(View)`
  flex-direction: row;
  margin-top: 19px;
`
export const SingUp = styled(Text) <{ span?: boolean }>`
  color: ${(props) => (props.span ? colors.primary : colors.text)};
  font-size: 16px;
  font-family: ${props => (props.span ? fonts.title500 : fonts.text300)};
`