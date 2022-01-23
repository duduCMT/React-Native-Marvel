import { RFValue } from 'react-native-responsive-fontsize'
import { utils } from './utils'
import { size } from "../../styles";

const { SCREEN, LOGO } = size

export const animationLogo = {
  from: {
    transform: [
      { translateX: -(SCREEN.width / 2) + (LOGO.mediumWidth / 2) + utils.marginTop },
      { translateY: -utils.marginTop + RFValue(72) }
    ],
  },
  position2: {
    transform: [
      { translateX: (SCREEN.width / 2) - (LOGO.mediumWidth / 2) - utils.marginTop },
      { translateY: SCREEN.height - LOGO.mediumHeight - (LOGO.mediumHeight / 2) - utils.marginTop - RFValue(72) }
    ],
  },
  position3: {
    transform: [
      { translateX: 0 },
      { translateY: (SCREEN.height / 2) - utils.marginTop }
    ],
  },
  position4: {
    transform: [
      { translateX: 0 },
      { translateY: 0 }
    ],
  },
}