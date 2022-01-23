import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { useAnimationState } from 'moti'
import { SharedElement } from 'react-navigation-shared-element'

import Logo, { SHARED_ID } from '../../components/Logo'
import Background from './components/Background'
import CheckBox from './components/CheckBox'

import api from '../../services/api'
import { Creators } from '../../store/ducks/user'
import { CharactesScreenProp } from '../../routes'

import { animationLogo as aniLogo } from './animations'

import {
  Container,
  Content,
  Form,
  Title,
  Subtitle,
  Input,
  Button,
  ButtonText,
  SingUpArea,
  SingUp,
  LogoAnimator,
} from './styles'


export default function SignIn() {
  const dispatch = useDispatch()
  const navigation = useNavigation<CharactesScreenProp>()

  const [showForm, setShowForm] = useState(false)
  const [saveCheck, setSaveCheck] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const animationLogo = useAnimationState(aniLogo)

  function handleSubmit() {
    if (!email || !password) {
      Alert.alert('Informações Incompletas', 'Verifique os dados informados e tente novamente.')
      return;
    }

    api.post('/signin', {
      email,
      password
    }).then((response) => {
      const user = response.data.user as User
      dispatch(Creators.setUser(user))

      navigation.reset({
        index: 0,
        routes: [{name: 'Charactes'}],
      });
    }).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
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
            animationLogo.transitionTo('position4')
            setShowForm(true)
          }, 1400)
        }, 1400)
      }, 600)
    }
  }, [])

  return (
    <Container>
      <Background>
        <Content>
          <LogoAnimator state={animationLogo} >
            <SharedElement id={SHARED_ID}>
              <Logo />
            </SharedElement>
          </LogoAnimator>
          
          { showForm &&
          <Form 
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
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
              title='Salvar dados de login e entrar automaticamente'
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
          }
        </Content>
      </Background>
    </Container>
  )
}