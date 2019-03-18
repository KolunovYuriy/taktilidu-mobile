import React from 'react'
import { Image } from 'react-native'
import { Button, Text } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import { icNext } from '../../assets/images'
import styles from './styles'

export function MainButton({ text, onPress, noIcon }) {
  return (
    <LinearGradient
      useAngle
      angle={139.56}
      start={{ x: 0.5, y: 0 }}
      locations={[0, 1]}
      end={{ x: 1.5, y: 0 }}
      style={styles.linearGradient}
      colors={['#FD6585', '#0D25B9']}
    >
      <Button rounded style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        {!noIcon && <Image source={icNext} style={styles.icon} />}
      </Button>
    </LinearGradient>
  )
}
