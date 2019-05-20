import React from 'react'
import { Modal } from 'react-native'

import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { Text, Header, Left, Right } from 'native-base'

export function PopUpModal({ isVisible }) {
  return (
    <Modal animationType="slide" visible={isVisible}>
      <LinearGradient
        useAngle
        angle={105.98}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.linearGradient}
        colors={['#95499B', '#2131B5']}
      >
        <Header>
          <Left>
            <Text>назад</Text>
          </Left>
          <Right>
            <Text>поездки</Text>
          </Right>
        </Header>
      </LinearGradient>
    </Modal>
  )
}
