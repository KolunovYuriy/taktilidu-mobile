import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  inputStyle: {
    borderRadius: 6,
    fontWeight: '300'
  },
  textareaStyle: {
    width: '100%',
    fontWeight: '300',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    paddingLeft: 5,
    paddingTop: 15,
    paddingBottom: 10,
    color: '#000'
  },
  icon: {
    resizeMode: 'contain',
    width: 20,
    tintColor: '#818181',
    marginLeft: 16,
    marginRight: 16
  },
  form: {
    marginBottom: 8
  },
  formGroup: {
    flex: 0,
    marginTop: 0,
    marginBottom: 16,
    marginRight: 8,
    marginLeft: 8,
    elevation: 8,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderColor: 'transparent',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10
  }
})
