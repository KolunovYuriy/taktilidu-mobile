import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  icon: {
    resizeMode: 'contain',
    width: 30
  },
  button: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    minWidth: 204,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: -24,
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    elevation: 3,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 }
  },
  text: {
    color: '#9B4B9A',
    fontSize: 16
  }
})
