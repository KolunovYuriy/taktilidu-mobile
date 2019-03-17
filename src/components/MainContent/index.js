import React from 'react'
import { Content } from 'native-base'

import styles from '../../assets/styles/commonStyles'

export default function AuthContent(props) {
  return (
    <Content
      style={[
        styles.content,
        props.padding && { paddingLeft: props.padding, paddingRight: props.padding }
      ]}
    >
      {props.children}
    </Content>
  )
}
