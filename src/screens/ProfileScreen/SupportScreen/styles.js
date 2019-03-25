import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  accordion: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: -16
  },
  accordionHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: '#D9D9D9',
    paddingLeft: 0,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 0
  },
  accordionHeaderText: {
    fontWeight: '300'
  },
  accordionContent: {
    backgroundColor: 'transparent',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    paddingLeft: 0,
    paddingBottom: 15,
    marginLeft: 0
  },
  iconArrow: {
    width: 10,
    height: 10
  }
})
