import React from 'react'
import { SafeAreaView } from 'react-native'
import { Content } from 'native-base'

import styles from '../../assets/styles/commonStyles'

export default function AuthContent(props) {
  return (
    <Content
      style={[
        props.padding
          ? { paddingLeft: props.padding, paddingRight: props.padding }
          : { paddingLeft: 30, paddingRight: 30 }
      ]}
    >
      <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
    </Content>
  )
}
