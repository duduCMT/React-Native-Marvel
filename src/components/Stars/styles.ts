import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons'; 
import { colors, fonts, size } from "../../styles";

const { create } = size

export const Container = styled.View`
  width: ${create(178)}px;
  height: ${create(59)}px;
  background-color: ${colors.background};
  border-radius: ${size.BORDER.medium}px;
  border-width: 1px;
  border-color: ${colors.primary};
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: ${colors.text};
  font-family: ${fonts.title400};
  font-size: ${size.FONT_SIZE.regular}px;
`

export const StarList = styled.View`flex-direction: row`

export const Star = styled(Ionicons).attrs({
  name: 'star',
  size: create(16),
})<{active: boolean}>
`
  color: ${({active}) => active ? colors.star : colors.starDisable};
  margin-right: ${create(3)}px;
`

