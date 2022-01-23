import React from 'react'
import { CheckBox as CheckBoxElement, CheckBoxProps } from 'react-native-elements/dist/checkbox/CheckBox'
import { styles } from './styles'

type Props = CheckBoxProps & {

}

export default function CheckBox({ textStyle, containerStyle, ...rest }: Props) {
  return (
    <CheckBoxElement
      {...rest}
      containerStyle={[styles.content, containerStyle]}
      textStyle={[styles.text, textStyle]}
      checkedColor='red'
      uncheckedColor='red'
      activeOpacity={.8}
    />
  )
}