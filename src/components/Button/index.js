import React, { Fragment } from 'react'
import { Image } from 'react-native'
import { Button, Text } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import { icNext } from '../../assets/images'
import styles from './styles'

export function MainButton({ text, onPress, noIcon, buttonWidth, noGradient, noGradientStyle }) {
  return (
    <Fragment>
      {noGradient ? (
        <Button
          rounded
          style={[styles.button, noGradientStyle, buttonWidth && { width: buttonWidth }]}
          onPress={onPress}
        >
          <Text style={[styles.text, { textDecorationLine: 'underline' }]} uppercase={false}>
            {text}
          </Text>
          {!noIcon && <Image source={icNext} style={styles.icon} />}
        </Button>
      ) : (
        <LinearGradient
          useAngle
          angle={143.92}
          locations={[0, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={[styles.linearGradient, buttonWidth && { width: buttonWidth }]}
          colors={['#95499B', '#2131B5']}
        >
          <Button rounded style={styles.button} onPress={onPress}>
            <Text style={styles.text} uppercase={false}>
              {text}
            </Text>
            {!noIcon && <Image source={icNext} style={styles.icon} />}
          </Button>
        </LinearGradient>
      )}
    </Fragment>
  )
}
