import React from 'react'
import { ListItem, Text, View, Thumbnail } from 'native-base'

import styles from './styles'
import { imgUserPhoto } from '../../assets/images'

export default function FeedbackCard() {
  return (
    <ListItem style={styles.listItem}>
      <Thumbnail source={imgUserPhoto} style={styles.avatar} square />
      <View>
        <View style={styles.feedbackHeader}>
          <Text style={styles.name}>Viacheslav Mykhailov</Text>
          <Text style={styles.date}> - 10 октября 2018</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.feedbackContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>
      </View>
    </ListItem>
  )
}
