import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  logo: {
    resizeMode: 'contain',
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    width: (width - 60) / 2,
    alignSelf: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center'
  },
  imageBackground: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover'
  }
})
