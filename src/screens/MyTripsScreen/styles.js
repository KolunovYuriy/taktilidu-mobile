import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 24
  },
  sectionText: {
    color: '#000000',
    fontWeight: 'normal',
    fontSize: 16,
    marginRight: 32
  },
  activeSectionText: {
    color: '#9B4B9A',
    textDecorationLine: 'underline'
  }
})
