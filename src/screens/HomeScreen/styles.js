import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  customSlide: {
    width,
    height: (height * 2) / 5,
    flex: 0,
    marginBottom: 5
  },
  customImage: {
    resizeMode: 'cover',
    height: (height * 2) / 5,
    width
  },
  icon: {
    tintColor: '#fff',
    width: 4,
    height: 4,
    marginLeft: 4,
    marginRight: 4
  },
  activeCircle: {
    tintColor: '#9B4B9A'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0
  },
  title: {
    position: 'absolute',
    zIndex: 10,
    top: 75,
    left: 30,
    right: 30,
    fontSize: 24,
    color: '#fff',
    textAlign: 'center'
  }
})
