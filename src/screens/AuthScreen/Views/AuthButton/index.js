import React from 'react'
import { Image } from 'react-native'
import { Button, Text } from 'native-base'

import styles from './styles'

import { icNext } from '../../../../assets/images'

export function AuthButton({ buttonText, onPress, disabled, noIcon }) {
  return (
    <Button onPress={onPress} rounded style={styles.button} disabled={disabled}>
      <Text style={styles.text} uppercase={false}>
        {buttonText}
      </Text>
      {!noIcon && <Image style={styles.icon} source={icNext} />}
    </Button>
  )
}
