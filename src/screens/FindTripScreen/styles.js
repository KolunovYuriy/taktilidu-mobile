import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  createButton: {
    color: '#9B4B9A',
    fontSize: 16,
    alignSelf: 'center',
    textDecorationLine: 'underline'
  },
  text: {
    fontSize: 16,
    color: '#000',
    paddingTop: 16,
    paddingBottom: 16,
    alignSelf: 'center'
  },
  iconCircle: {
    width: 4,
    height: 4,
    marginRight: 8
  },
  iconRightArrow: {
    width: 12,
    height: 12,
    marginRight: 10,
    marginLeft: 10
  },
  targetSection: {
    marginTop: 0,
    paddingTop: 0,
    borderBottomWidth: 0,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center'
  },
  fromTargetText: {
    fontSize: 14,
    fontWeight: '300'
  },
  toTargetText: {
    fontSize: 14,
    fontWeight: 'normal'
  }
})
