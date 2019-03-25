import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  ltHorizontalSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  verticalSection: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  ltAvatar: {
    marginRight: 15
  },
  ltRegisterDateStyle: {
    color: '#9B4B9A',
    fontSize: 12,
    paddingBottom: 3
  },
  ltProfileStyle: {
    fontSize: 16
  },
  // Light theme
  horizontalSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20
  },
  avatar: {
    marginRight: 15,
    marginBottom: 20
  },
  registerDateStyle: {
    marginTop: 5,
    marginBottom: 5,
    color: '#fff',
    fontSize: 10,
    paddingBottom: 3
  },
  profileStyle: {
    fontSize: 16,
    color: '#fff'
  }
})
