import React, { ReactNode, useEffect, useState } from 'react'
import { View } from 'react-native'
import { MotiView, AnimatePresence, useAnimationState } from 'moti'
import { resizeByHeight, resizeByWidth } from '../../../../styles/metrics'
import { BackgroundImage, Gradient, SolidBackgroundContainer } from './styles'
import { 
  animationBg1 as aniBg1, 
  animationBg2 as aniBg2, 
  animationGradient as aniGradient 
} from './animations'

const bg1 = require('../../../../assets/img/bg01.png')
const bg2 = require('../../../../assets/img/bg02.jpg')

const bg2Size: ImageSize = { width: 1090, height: 750 }

type Props = {
  children: ReactNode
}

export default function Background({ children }: Props) {
  const [visibleBg1, setVisibleBg1] = useState(true)
  const initialSizeBg2 = resizeByHeight(bg2Size.height, bg2Size.width, 1)
  const endSizeBg2 = resizeByWidth(bg2Size.height, bg2Size.width, 1)

  const animationBg1 = useAnimationState(aniBg1)
  const animationBg2 = useAnimationState(aniBg2(initialSizeBg2, endSizeBg2))
  const animationGradient = useAnimationState(aniGradient)
  
  useEffect(() => {
    setTimeout(() => {
      animationBg1.transitionTo('show')
      setTimeout(() => {
        animationBg2.transitionTo('show')  
        setVisibleBg1(false)
        setTimeout(() => {
          animationBg2.transitionTo('reduce')
          animationGradient.transitionTo('show')
        }, 1400)
      }, 1400)
    }, 600)
  }, [])

  return (
    <View style={{flex: 1}}>
      <SolidBackgroundContainer>
        <BackgroundImage
          style={{ alignSelf: 'center' }}
          transition={{ type: 'timing', duration: 800,}}
          state={animationBg2}
          source={bg2}
        />
        <MotiView
          state={animationGradient}
          transition={{ type: 'timing', duration: 800, }}
        >
          <Gradient style={{...endSizeBg2}} />
        </MotiView>
      </SolidBackgroundContainer>

      <AnimatePresence exitBeforeEnter>
        { visibleBg1 &&
          <SolidBackgroundContainer
            state={animationBg1}
            exit={{ opacity: 0 }}
            transition={{ type: 'timing', duration: 800, }}
          >
            <BackgroundImage resizeMode='cover' source={bg1} />
          </SolidBackgroundContainer>
        }
      </AnimatePresence>
      {children}
    </View>
  )
}