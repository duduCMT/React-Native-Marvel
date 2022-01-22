import { utils } from './utils'
import { metrics } from "../../styles";

export const animationLogo = {
  from: {
    transform: [
      {translateX: -(metrics.screenWidth / 2) + (metrics.logoWidth / 2) + utils.marginTop}, 
      {translateY: -utils.marginTop + 72}
    ],
  },
  position2: {
    transform: [
      {translateX: (metrics.screenWidth / 2) - (metrics.logoWidth / 2) - utils.marginTop}, 
      {translateY: metrics.screenHeight - metrics.logoHeight - (metrics.logoHeight / 2) - utils.marginTop - 78 }
    ], 
  },
  position3: {
    transform: [
      {translateX: 0}, 
      {translateY: (metrics.screenHeight / 2) - utils.marginTop }
    ], 
  },
  position4: {
    transform: [
      {translateX: 0}, 
      {translateY: 0}
    ], 
  },
}