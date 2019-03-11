import React from 'react'
import { Header, Left, Right, Button, Icon, Text } from 'native-base'
import styles from './styles'

export default function AuthHeader({ routeName, onPress, onBackPress }) {
  return (
    <Header style={styles.header}>
      <Left>
        <Button onPress={onBackPress} transparent>
          <Icon name="arrow-back" style={styles.icon} />
          <Text style={styles.backTextStyle}>назад</Text>
        </Button>
      </Left>
      <Right>
        <Button onPress={onPress} transparent>
          <Text style={styles.textStyle}>{routeName}</Text>
        </Button>
      </Right>
    </Header>
  )
}
