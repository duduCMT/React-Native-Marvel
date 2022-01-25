import styled from "styled-components/native";
import { colors, fonts, size } from "../../styles";
import Icon from '@expo/vector-icons/MaterialIcons'; 

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`

export const Header = styled.View`
  padding-left: ${size.PADDING.header.horizontal}px;
  padding-right: ${size.PADDING.header.horizontal}px;
  padding-top: ${size.PADDING.header.vertical}px;
  padding-bottom: ${size.PADDING.header.vertical}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const BackButton = styled(Icon).attrs({
  name: "keyboard-backspace",
  size: 19,
  color: colors.primary,
})`
  margin-right: ${size.create(12)}px;
`

export const ListTitle = styled.Text`
  font-size: ${size.FONT_SIZE.large}px;
  font-family: ${fonts.title700};
  color: ${colors.text};
  margin-left: ${size.create(12)}px;
`