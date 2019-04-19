import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 24,
    width: 148
  },
  createButton: {
    color: '#9B4B9A',
    fontSize: 16,
    alignSelf: 'center',
    textDecorationLine: 'underline'
  },
  noGradientStyle: {
    backgroundColor: '#8C3B8B',
    paddingLeft: 5,
    paddingRight: 5
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'OpenSans-Light',
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
  iconDown: {
    alignSelf: 'center',
    width: 18,
    height: 9,
    marginBottom: 16
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
