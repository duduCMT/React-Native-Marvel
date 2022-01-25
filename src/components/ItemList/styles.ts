import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { colors, fonts, size } from "../../styles";

const { create } = size 

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  border-radius: ${size.BORDER.large}px;
  height: ${create(245)}px;
  width: ${create(161)}px;
  overflow: hidden;
  justify-content: flex-end;
`

export const BackgroundImage = styled.Image`
  position: absolute;
  height: 100%;
  width: 100%;
` 

export const Content = styled.View`
  border-radius: ${size.BORDER.large}px;
  width: 100%;
  height: ${create(131)}px;
  overflow: hidden;
`

export const Gradient = styled(LinearGradient).attrs({
  colors: ['rgba(128, 0, 0, 0.3)', colors.primary],
  start: {x: 0, y: 1},
  end: {x: 0, y: 0},
  locations: [0.1, 0.9],
})`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.9;
  bottom: 0;
`

export const TextArea = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: ${create(13)}px;
  padding-right: ${create(13)}px;
  padding-top: ${create(16)}px;
  padding-bottom: ${create(12)}px;
`

export const Title = styled.Text`
  font-size: ${size.FONT_SIZE.medium}px;
  font-family: ${fonts.title700};
  color: ${colors.text};
  margin-bottom: ${create(14)}px;
`

export const Description = styled.Text`
  font-size: ${size.FONT_SIZE.tiny}px;
  font-family: ${fonts.text100};
  color: ${colors.text};
  margin-bottom: ${create(13)}px;
`

export const ActionText = styled.Text`
  font-size: ${size.FONT_SIZE.medium}px;
  font-family: ${fonts.text100};
  color: ${colors.text};
`