import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  icon: {
    resizeMode: 'contain',
    tintColor: '#9B4B9A',
    marginRight: 8,
    width: 15,
    height: 15
  },
  infoSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 0,
    paddingLeft: 0,
    paddingBottom: 8
  },
  infoSectionItem: {
    width: (width - 30) / 2,
    marginLeft: 0,
    paddingTop: 15,
    paddingBottom: 0,
    borderBottomWidth: 0
  },
  infoText: {
    fontSize: 12
  },
  // Driver info section
  list: {
    marginLeft: 0,
    paddingLeft: 0
  },
  listItem: {
    marginLeft: 0,
    paddingRight: 0
  },
  iconStar: {
    width: 12,
    height: 12,
    marginLeft: 5
  },
  listText: {
    fontSize: 14,
    fontFamily: 'OpenSans-Light'
  },
  label: {
    fontSize: 24,
    color: '#000',
    paddingTop: 14
  }
})
