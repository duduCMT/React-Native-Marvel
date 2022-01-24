import { size, fonts, colors } from './../../styles'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

const { create } = size

const heigth = create(220);
const width = create(202);

export const Container = styled.View<{secondary: boolean}>`
  height: ${heigth}px;
  width: ${width}px;
  justify-content: flex-end;
  overflow: hidden;
  border-radius: ${size.BORDER.large}px;
  border-width: ${({secondary}) => secondary ? 0 : 1}px;
  border-color: ${colors.primary};
  opacity: ${({secondary}) => secondary ? 0.25 : 1};
`

export const BackgroundImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  ${`resizeMode: cover`};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Gradient = styled(LinearGradient).attrs({
  colors: ['transparent', colors.primary],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
  locations: [0.1, 0.9],
})`
  position: absolute;
  width: 100%;
  height: 50%;
  right: 0;
  bottom: 0;
  left: 0;
`


export const Title = styled.Text`
  font-size: ${size.FONT_SIZE.regular}px;
  font-family: ${fonts.title700};
  color: ${colors.text};
  padding: ${create(20)}px;
`