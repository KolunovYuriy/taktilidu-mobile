import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1
  },
  linearGradient: {
    flex: 1,
    opacity: 0.85
  },
  image: {
    resizeMode: 'contain',
    tintColor: '#fff',
    height: 100,
    width: (width - 60) / 2
  },
  bottomSection: {
    flex: 0
  }
})
