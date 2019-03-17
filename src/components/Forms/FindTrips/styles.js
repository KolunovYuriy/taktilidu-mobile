import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  inputStyle: {
    backgroundColor: 'transparent'
  },
  icon: {
    resizeMode: 'contain',
    width: 20,
    tintColor: '#818181',
    marginLeft: 5,
    marginRight: 5
  },
  formGroup: {
    flex: 0,
    marginTop: 20,
    marginBottom: 5,
    marginRight: 0,
    marginLeft: 0,
    borderBottomWidth: 1,
    borderColor: 'transparent',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2
  }
})
