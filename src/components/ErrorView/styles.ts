import styled from "styled-components/native";
import { colors, fonts, size } from "../../styles";

export const ErrorContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-top: ${size.SCREEN.height / 4}px;
  align-items: center;
`

export const ErrorTitle = styled.Text`
  margin-top: ${size.create(18)}px;
  color: ${colors.text};
  font-family: ${fonts.title700};
  font-size: ${size.FONT_SIZE.large}px;
`

export const ErrorMessage = styled.Text`
  color: ${colors.text};
  font-family: ${fonts.text300};
  font-size: ${size.FONT_SIZE.regular}px;
  margin-bottom: ${size.create(64)}px;
`
