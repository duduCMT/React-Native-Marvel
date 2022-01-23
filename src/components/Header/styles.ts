import styled from "styled-components/native";
import MenuIconSvg from '../../assets/svg/menu-icon.svg'
import { colors, size } from "../../styles";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${size.PADDING.header.horizontal}px;
  padding-right: ${size.PADDING.header.horizontal}px;
  padding-top: ${size.PADDING.header.vertical}px;;
  padding-bottom: ${size.PADDING.header.vertical}px;
`

export const MenuIcon = styled(MenuIconSvg)`
  color: ${colors.primary};
`