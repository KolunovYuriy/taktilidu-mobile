import React from 'react'
import { SafeAreaView } from 'react-native'
import { Content } from 'native-base'

export default function AuthContent({ padding, children }) {
  return (
    <Content
      style={[
        padding
          ? { paddingLeft: padding, paddingRight: padding }
          : { paddingLeft: 30, paddingRight: 30 }
      ]}
    >
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </Content>
  )
}
