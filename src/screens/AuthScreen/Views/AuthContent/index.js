import React from 'react'
import { Content } from 'native-base'

import styles from '../../../../assets/styles/commonStyles'

export default function AuthContent(props) {
  return <Content style={styles.content}>{props.children}</Content>
}
