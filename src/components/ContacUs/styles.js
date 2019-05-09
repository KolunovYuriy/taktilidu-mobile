import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  linearGradient: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%'
  },
  button: {
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    paddingBottom: 8,
    paddingTop: 8
  },
  btnText: {
    color: '#fff',
    fontSize: 16
  },
  socialsSection: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 32
  },
  socialBtn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  socialBtnIcon: {
    height: 16,
    width: 16
  }
})
