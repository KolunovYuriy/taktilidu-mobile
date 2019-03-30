import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  linearGradient: {},
  list: {
    marginLeft: 0
  },
  listItem: {
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    justifyContent: 'space-between',
    tintColor: '#D9D9D9'
  },
  listItemText: {
    fontWeight: '300',
    fontSize: 16
  },
  iconRightArrow: {
    resizeMode: 'contain',
    width: 10,
    height: 10
  },
  // Edit screen
  sectionTitle: {
    marginTop: 16
  },
  editButton: {
    paddingTop: 0,
    paddingBottom: 0,
    height: '100%'
  },
  iconEdit: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    tintColor: '#818181'
  },
  icon: {
    tintColor: '#9B4B9A',
    resizeMode: 'contain',
    width: 16,
    height: 16,
    marginRight: 10
  },
  datepicker: {
    fontWeight: '300',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginTop: 0,
    marginBottom: 0
  },
  gender: {
    backgroundColor: 'green',
    height: 'auto',
    width: 'auto',
    paddingVertical: 0,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  genderText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#000',
    textAlign: 'left',
    marginRight: 50
  },
  activeText: {
    color: '#9B4B9A'
  },
  listItemInput: {
    flex: 0.9,
    fontSize: 16,
    fontWeight: '300',
    height: 'auto',
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginTop: 0
  }
})
