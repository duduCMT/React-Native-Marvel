import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { MotiImage, useAnimationState } from 'moti'
import Background from './components/Background'

import { styles } from './styles'
import { animationLogo as aniLogo } from './animation'

const logo = require('../../assets/img/logo.png')

type Props = {
}

export default function SingIn({ }: Props) {
  const animationLogo = useAnimationState(aniLogo)

  useEffect(() => {
    setTimeout(() => {
      animationLogo.transitionTo('position2') 
      setTimeout(() => {
        animationLogo.transitionTo('position3') 
        setTimeout(() => {
          animationLogo.transitionTo('position4') 
        }, 1400)
      }, 1400)
    }, 600)
  }, [])

  return (
    <View style={styles.container}>
      <Background>
        <View style={styles.content}>
          <MotiImage
            state={animationLogo}
            transition={{ type: 'timing', duration: 800,}}
            style={styles.logo}
            source={logo}
          />
        </View>
      </Background>
    </View>
  )
}