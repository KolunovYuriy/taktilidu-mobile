import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  listItem: {
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'flex-start'
  },
  feedbackHeader: {
    flexDirection: 'row',
    paddingBottom: 15
  },
  feedbackContent: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'OpenSans-Light'
  },
  avatar: {
    marginRight: 15
  },
  name: {
    fontSize: 12,
    color: '#9B4B9A',
    fontFamily: 'OpenSans-Light'
  },
  date: {
    fontSize: 12,
    color: '#818181',
    fontFamily: 'OpenSans-Light'
  }
})
