import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  inputStyle: {
    borderRadius: 6,
    fontWeight: '300'
  },
  amountLabel: {
    fontSize: 17,
    fontWeight: '300',
    color: '#000'
  },
  time: {
    fontSize: 17,
    fontWeight: '300',
    color: '#000',
    width: '100%'
  },
  timePlaceholder: {
    fontSize: 17,
    fontWeight: '300',
    color: '#818181',
    width: '100%'
  },
  counterStyle: {
    flex: 1,
    height: 50,
    paddingLeft: 5,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  datepickerStyle: {
    flex: 1,
    height: 50,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    resizeMode: 'contain',
    width: 20,
    tintColor: '#818181',
    marginLeft: 16,
    marginRight: 11
  },
  buttonMinusStyle: {
    backgroundColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 24,
    width: 24,
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  buttonPlusStyle: {
    backgroundColor: '#9B4B9A',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 24,
    width: 24,
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  iconMinusStyle: {
    color: '#818181',
    fontSize: 18,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    alignSelf: 'center',
    alignItems: 'center'
  },
  iconPlusStyle: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    alignSelf: 'center',
    alignItems: 'center'
  },
  amountValue: {
    fontSize: 18,
    fontWeight: '300',
    marginLeft: 10,
    marginRight: 10
  },
  form: {
    marginBottom: 8
  },
  formGroup: {
    flex: 0,
    width: '100%',
    marginTop: 0,
    marginBottom: 16,
    marginRight: 8,
    marginLeft: 8,
    // elevation: 5,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderColor: 'transparent',
    borderRadius: 6,
    alignItems: 'center'
    // justifyContent: 'space-between',
    // shadowColor: 'rgba(0, 0, 0, 0.2)',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.5,
    // shadowRadius: 10
  }
})
