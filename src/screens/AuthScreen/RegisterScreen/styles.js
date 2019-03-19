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
  icon: {
    resizeMode: 'contain',
    width: 30,
    tintColor: '#fff'
  },
  image: {
    resizeMode: 'contain',
    tintColor: '#fff',
    height: 100,
    width: (width - 60) / 2
  },
  listStyle: {
    margin: 0,
    padding: 0
  },
  listItemStyle: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    marginLeft: 0,
    padding: 0,
    justifyContent: 'space-between'
  },
  listItemText: {
    color: '#fff'
  },
  boldText: {
    fontWeight: 'bold'
  }
})
