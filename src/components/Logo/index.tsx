import { MotiImage } from "moti";
import styled from "styled-components";
import { size } from "../../styles";

const logo = require('../../assets/img/logo.png')
const { LOGO } = size

type Props = {
  small?: boolean
}

const Logo = styled(MotiImage).attrs({
  transition: { type: 'timing', duration: 800, },
  source: logo
})<Props>`
  height: ${({small}) => !small ? LOGO.mediumHeight : LOGO.smallHeight }px;
  width: ${({small}) => !small ? LOGO.mediumWidth : LOGO.smallWidth }px;
`

export default Logo

export const SHARED_ID = "@sharedId/logo"