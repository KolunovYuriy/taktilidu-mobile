import React from 'react'
import { Image } from 'react-native'
import { Button, Text } from 'native-base'

import styles from './styles'

import { icNext } from '../../../../assets/images'

export function AuthButton({ buttonText, onPress }) {
  return (
    <Button onPress={onPress} rounded style={styles.button}>
      <Text style={styles.text}>{buttonText}</Text>
      <Image style={styles.icon} source={icNext} />
    </Button>
  )
}
