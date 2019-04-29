import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
export default StyleSheet.create({
  screenTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16
  },
  text: {
    fontSize: 16,
    fontFamily: 'OpenSans-Light'
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  image: {
    resizeMode: 'contain',
    width: (width - 54) / 2,
    height: (width - 54) / 2 - 20,
    marginBottom: 10
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#9B4B9A'
  }
})
