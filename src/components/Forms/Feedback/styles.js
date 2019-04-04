import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  listItemInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '300',
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginTop: 0,
    borderWidth: 0
  },
  item: {
    flex: 1,
    borderBottomWidth: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  errorText: {
    fontSize: 9,
    color: 'red',
    alignSelf: 'center'
  },
  formGroup: {
    flex: 0,
    marginTop: 16,
    marginBottom: 16,
    marginRight: 8,
    marginLeft: 8,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderColor: 'transparent'
    // borderRadius: 6,
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // shadowColor: 'rgba(0, 0, 0, 0.2)',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
    // elevation: 8,
  }
})
