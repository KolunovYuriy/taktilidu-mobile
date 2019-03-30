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
  },
  editButton: {
    position: 'absolute',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 50,
    width: '100%',
    height: '100%',
    opacity: 0.7
  },
  iconEdit: {
    resizeMode: 'contain',
    tintColor: '#000',
    width: 20,
    height: 20
  }
})
