import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  inputStyle: {
    borderRadius: 6
  },
  icon: {
    resizeMode: 'contain',
    width: 20,
    tintColor: '#818181',
    marginLeft: 16,
    marginRight: 16
  },
  form: {
    marginBottom: 24
  },
  formGroup: {
    flex: 0,
    marginTop: 20,
    marginBottom: 5,
    marginRight: 0,
    marginLeft: 0,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'transparent',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10
  }
})
