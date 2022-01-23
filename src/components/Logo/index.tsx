import { MotiImage } from "moti";
import styled from "styled-components";
import { metrics } from "../../styles";

const logo = require('../../assets/img/logo.png')

type Props = {
  small?: boolean
}

const Logo = styled(MotiImage).attrs({
  transition: { type: 'timing', duration: 800, },
  source: logo
})<Props>`
  height: ${({small}) => !small ? metrics.logoHeight : metrics.smallLogoHeight }px;
  width: ${({small}) => !small ? metrics.logoWidth : metrics.smallLogoWidth }px;
`

export default Logo