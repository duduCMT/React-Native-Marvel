import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useAnimationState } from 'moti'
import Background from './components/Background'
import CheckBox from './components/CheckBox'

import { 
  animationLogo as aniLogo,
  animationForm as aniForm
} from './animation'

import { 
  Container, 
  Content, 
  Logo,
  Form, 
  Title, 
  Subtitle, 
  Input, 
  Button, 
  ButtonText, 
  SingUpArea, 
  SingUp, 
} from './styles'

const logo = require('../../assets/img/logo.png')

export default function SingIn() {
  const [ saveCheck, setSaveCheck ] = useState(false)

  const animationLogo = useAnimationState(aniLogo)
  const animationForm = useAnimationState(aniForm)

  useEffect(() => {
    if(animationLogo.current === 'from'){
      setTimeout(() => {
        animationLogo.transitionTo('position2')
        setTimeout(() => {
          animationLogo.transitionTo('position3')
          setTimeout(() => {
            animationForm.transitionTo('show')
            animationLogo.transitionTo('position4')
          }, 1400)
        }, 1400)
      }, 600)
    }
  }, [])

  return (
    <Container>
      <Background>
        <Content>
          <Logo state={animationLogo} source={logo} />
          <Form state={animationForm} >
            <Title>Bem-Vindo!</Title>
            <Subtitle>Fazer Login!</Subtitle>
            <Input 
              placeholder='E-mail' 
              keyboardType='email-address' 
              style={{marginTop: 20}} 
            />
            <Input 
              placeholder='Senha' 
              secureTextEntry 
              style={{marginTop: 15}} 
            />
            <Button>
              <ButtonText>Entrar</ButtonText>
            </Button>
            <CheckBox 
              title='Salvar dados de login e entre automaticamente'
              checked={saveCheck}
              onPress={() => setSaveCheck(!saveCheck)}
            />
            <SingUpArea>
              <SingUp>É novo(a) aqui? </SingUp>
              <TouchableOpacity activeOpacity={0.7} >
                <SingUp span>Cadastre-se</SingUp>
              </TouchableOpacity>
            </SingUpArea>
          </Form>
        </Content>
      </Background>
    </Container>
  )
}