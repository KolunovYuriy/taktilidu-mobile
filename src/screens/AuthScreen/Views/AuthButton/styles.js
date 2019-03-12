import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  icon: {
    resizeMode: 'contain',
    width: 20
  },
  button: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: 200,
    marginTop: -24,
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 0.5,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 }
  },
  text: {
    color: '#9B4B9A'
  }
})
