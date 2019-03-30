import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  list: {
    marginLeft: 0,
    marginTop: -15
  },
  listItem: {
    flex: 1,
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    justifyContent: 'flex-start'
  },
  listItemText: {
    fontWeight: '300',
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 18
  },
  iconLeftArrow: {
    resizeMode: 'contain',
    tintColor: '#9B4B9A',
    height: 20,
    width: 15,
    marginLeft: 3
  },
  iconCircle: {
    resizeMode: 'contain',
    tintColor: '#1BFB08',
    width: 5,
    height: 5,
    position: 'absolute',
    top: 4,
    right: 0
  }
})
