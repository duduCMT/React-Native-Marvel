import styled from "styled-components/native"
import { colors, fonts, size } from "../../styles"

const { create } = size

export const Title = styled.Text`
  font-family: ${fonts.title700};
  font-size: ${size.FONT_SIZE.big}px;
  color: ${colors.text};
  margin-bottom: ${create(11)}px;
`

export const Image = styled.Image`
  border-radius: ${size.BORDER.small}px;
  width: ${create(55)}px;
  height: ${create(55)}px;
`
