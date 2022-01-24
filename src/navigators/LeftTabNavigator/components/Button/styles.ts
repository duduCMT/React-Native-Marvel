import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { colors, fonts, size } from '../../../../styles'

const { create } = size

const widthRotate = create(104)

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: ${create(40)}px;
  height: ${widthRotate}px;
  border-top-right-radius: ${size.BORDER.small}px;
  border-bottom-right-radius: ${size.BORDER.small}px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

export const Gradient = styled(LinearGradient).attrs({
  colors: ['transparent', colors.primary],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
  locations: [0.2, 0.9],
})<{active: boolean}>
`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: ${({active}) => active ? 1 : 0.4};
`

export const Title = styled.Text<{active: boolean}>
`
  color: ${({active}) => active ? colors.text : colors.primary };
  font-family: ${fonts.title500};
  font-size: ${size.FONT_SIZE.small}px; 
  transform: rotate(90deg);
  width: ${widthRotate}px;
  text-align: center;
  opacity: ${({active}) => active ? 1 : 0.4};
`