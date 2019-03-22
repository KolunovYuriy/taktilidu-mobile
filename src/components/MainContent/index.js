import React from 'react'
import { SafeAreaView } from 'react-native'
import { Content } from 'native-base'

export default function AuthContent({ contentContainerStyle, padding, children }) {
  return (
    <Content
      scrollEnabled
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={contentContainerStyle}
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
