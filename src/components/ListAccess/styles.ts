import styled from 'styled-components/native'
import { colors, fonts, size } from '../../styles'

const { create } = size

export const Container = styled.View`
  width: 100%;
  max-width: ${create(311)}px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-family: ${fonts.title700};
  font-size: ${size.FONT_SIZE.big}px;
  color: ${colors.text};
`

export const ViewMoreButton = styled.TouchableOpacity.attrs({
  opacity: 0.7
})`
  flex-direction: row;
  align-items: center;
`

export const ImagesArea = styled.View`
  flex-direction: row;
  margin-top: ${create(11)}px;
`

export const Image = styled.Image`
  height: ${create(70)}px;
  width: ${create(142)}px;;
  max-width: ${create(142)}px;
  border-radius: ${size.BORDER.small}px;
  margin-bottom: ${create(11)}px;
`

export const TextSubtitle = styled.Text`
  font-family: ${fonts.text100};
  font-size: ${size.FONT_SIZE.medium}px;
  color: ${colors.text};
  margin-bottom: ${create(11)}px;
`


