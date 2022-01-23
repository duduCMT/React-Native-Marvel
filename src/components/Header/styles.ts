import styled from "styled-components/native";
import MenuIconSvg from '../../assets/svg/menu-icon.svg'
import { colors } from "../../styles";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 42px;
  padding-right: 42px;
  padding-top: 30px;
  padding-bottom: 30px;
`

export const MenuIcon = styled(MenuIconSvg)`
  color: ${colors.primary};
`