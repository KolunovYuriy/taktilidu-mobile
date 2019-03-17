import React from 'react'
import { Image } from 'react-native'
import { Button, Text } from 'native-base'
import { icNext } from '../../assets/images'
import styles from './styles'

export function MainButton({ text, onPress, noIcon }) {
  return (
    <Button rounded style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
      {!noIcon && <Image source={icNext} style={styles.icon} />}
    </Button>
  )
}
