import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  // Sections starts
  horizontalSection: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20
  },
  tripDetailItemSection: {
    paddingBottom: 8
  },
  verticalSection: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  driverName: {
    fontSize: 12
  },
  driverinfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  listItem: {
    marginLeft: 0,
    marginTop: 24,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 6,
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5
  },
  // Sections ends
  // Text styles
  sectionLabel: {
    textAlign: 'left',
    width: '100%',
    paddingLeft: 10,
    paddingTop: 8
  },
  label: {
    color: '#C4C4C4',
    fontSize: 14,
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  textStyle: {
    fontSize: 14,
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  carrierInfo: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingTop: 8,
    paddingLeft: 10,
    fontSize: 14
  },
  moreButton: {
    fontSize: 16,
    color: '#9B4B9A'
  },
  aboutDriver: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#9B4B9A'
  },
  price: {
    color: '#9B4B9A'
  },
  textCityStyle: {
    fontSize: 14,
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  toCityStyle: {
    fontSize: 14,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: 'OpenSans-Bold'
  },
  // Text styles ends
  // Icon styles starts
  iconBorder: {
    resizeMode: 'contain',
    tintColor: '#E3E3E3',
    alignItems: 'center',
    alignSelf: 'center',
    height: 30,
    width: 2
  },
  iconLine: {
    resizeMode: 'contain',
    tintColor: '#9B4B9A',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 8,
    height: 30,
    width: 4
  },
  iconLine2x: {
    resizeMode: 'contain',
    tintColor: '#9B4B9A',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 8,
    height: 45,
    width: 4
  },
  // Icon styles starts
  // Button styles starts
  reserveButton: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: 'transparent'
  },
  linearGradient: {
    width: '100%',
    marginTop: 10,
    alignSelf: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderColor: '#0D25B9'
  }
  //
})
