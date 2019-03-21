import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  horizontalSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  verticalSection: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  registerDateStyle: {
    color: '#9B4B9A',
    fontSize: 12,
    paddingBottom: 3
  },
  profileStyle: {
    fontSize: 16
  }
})
