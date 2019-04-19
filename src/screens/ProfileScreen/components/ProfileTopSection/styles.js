import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  ltHorizontalSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20
  },
  verticalSection: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1
  },
  avatar: {
    resizeMode: 'contain',
    width: 56,
    height: 56
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
  item: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 15,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 0,
    borderBottomWidth: 0,
    width: '100%'
  },
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
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginLeft: 0,
    height: 'auto',
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
  },
  iconNameEdit: {
    resizeMode: 'contain',
    tintColor: '#D9D9D9',
    width: 20,
    height: 20
  }
})
