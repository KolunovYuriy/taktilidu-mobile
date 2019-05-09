import React from 'react'
import { Linking, Image } from 'react-native'
import { View, Text, Button } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'
import { icTelegram, icWhatsapp, icViber } from '../../assets/images'

export function ContactUs() {
  return (
    <View>
      <View style={styles.socialsSection}>
        <Button rounded style={[styles.socialBtn, { backgroundColor: '#4CAF50' }]}>
          <Image source={icWhatsapp} style={styles.socialBtnIcon} />
        </Button>
        <Button rounded style={[styles.socialBtn, { backgroundColor: '#2872C8' }]}>
          <Image source={icTelegram} style={styles.socialBtnIcon} />
        </Button>
        <Button rounded style={[styles.socialBtn, { backgroundColor: '#8C3B8B' }]}>
          <Image source={icViber} style={styles.socialBtnIcon} />
        </Button>
      </View>
      <LinearGradient
        useAngle
        angle={147.35}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={[styles.linearGradient]}
        colors={['#95499B', '#2131B5']}
      >
        <Button
          transparent
          style={styles.button}
          onPress={() => Linking.openURL('mailto:service@taktilidu.ru')}
        >
          <Text style={styles.btnText} uppercase={false}>
            Написать письмо
          </Text>
          <Text style={styles.btnText} uppercase={false}>
            service@taktilidu.ru
          </Text>
        </Button>
      </LinearGradient>
    </View>
  )
}
