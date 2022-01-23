import React, { useEffect, useState } from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import { useAnimationState } from 'moti'
import Background from './components/Background'
import CheckBox from './components/CheckBox'

import {
  animationLogo as aniLogo,
  animationForm as aniForm
} from './animations'

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
import api from '../../services/api'
import { useDispatch } from 'react-redux'
import { Creators } from '../../store/ducks/user'

const logo = require('../../assets/img/logo.png')

export default function SignIn() {
  const dispatch = useDispatch()

  const [saveCheck, setSaveCheck] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const animationLogo = useAnimationState(aniLogo)
  const animationForm = useAnimationState(aniForm)

  function handleSubmit(){
    if(!email || !password){
      console.warn('Informações Incompletas')
      return;
    } 

    api.post('/signin', {
      email,
      password
    }).then((response) => {
      const user = response.data.user as User  
      dispatch(Creators.setUser(user))
      
    }).catch((error) => {
      if(error.response){
        switch(error.response.status) {
          case 400: 
            Alert.alert('Dados inválidos.', 'E-mail ou senha incorrentos. Tente novamente.')
            break
        }
      }
      
    })
  }

  useEffect(() => {
    if (animationLogo.current === 'from') {
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
              style={{ marginTop: 20 }}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Input
              placeholder='Senha'
              secureTextEntry
              style={{ marginTop: 15 }}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <Button onPress={() => handleSubmit()}>
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