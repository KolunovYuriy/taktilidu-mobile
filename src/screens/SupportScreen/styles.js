import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  accordion: {
    marginTop: 8
  },
  accordionSS: {
    marginBottom: 15
  },
  ssListItem: {
    marginLeft: 0,
    paddingLeft: 0
  },
  accordionHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: '#D9D9D9',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 0
  },
  accordionSSHeader: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: '#D9D9D9',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 15,
    marginLeft: 0
  },
  accordionHeaderText: {
    fontWeight: '300',
    fontSize: 16
  },
  accordionSSHeaderText: {
    fontWeight: '300',
    fontSize: 12
  },
  accordionContent: {
    backgroundColor: 'transparent',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 0,
    paddingLeft: 0,
    paddingBottom: 15,
    marginLeft: 0
  },
  accordionSSContent: {
    width: 250,
    backgroundColor: 'transparent',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 0,
    paddingLeft: 0,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 0
  },
  accordionSSContentText: {
    color: '#9B4B9A',
    fontSize: 12,
    fontWeight: '300'
  },
  accordionContentText: {
    fontSize: 12,
    fontWeight: '300'
  },
  iconArrow: {
    resizeMode: 'contain',
    width: 10,
    height: 10
  },
  iconRightArrow: {}
})
