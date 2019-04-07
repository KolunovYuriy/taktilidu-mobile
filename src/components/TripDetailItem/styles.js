import { StyleSheet, Platform, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

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
  tDhorizontalSection: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16
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
    marginLeft: 5,
    marginRight: 5,
    marginTop: 0,
    marginBottom: 20,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
    borderRadius: 6,
    borderColor: 'transparent',
    backgroundColor: '#fff'
    // shadowColor: 'rgba(0, 0, 0, 0.2)',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.5,
    // shadowRadius: 10
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
    paddingBottom: 8,
    color: '#C4C4C4',
    fontSize: 14,
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  tDLabel: {
    color: '#C4C4C4',
    fontSize: 14,
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  textStyle: {
    fontSize: 12,
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  tDtextStyle: {
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
    fontSize: 16,
    color: '#9B4B9A'
  },
  tDprice: {
    fontSize: 14,
    color: '#9B4B9A'
  },
  textCityStyle: {
    fontSize: 12,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontWeight: '300'
  },
  toCityStyle: {
    fontSize: 12,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontWeight: 'normal'
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
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 8,
    height: 54,
    width: 4
  },
  icPassenger: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    marginTop: 5,
    marginRight: 8
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
  },
  // My current trip screen details
  mctListItem: {
    flex: 0,
    width: '100%',
    height: height / 4,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 5,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
    borderRadius: 6,
    borderColor: 'transparent',
    backgroundColor: '#fff'
    // shadowColor: 'rgba(0, 0, 0, 0.2)',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.5,
    // shadowRadius: 10
  },
  mctHorizontalSection: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    width: '100%',
    justifyContent: 'space-between'
  },
  mctTextCity: {
    fontSize: 14,
    fontFamily: 'OpenSans-Light',
    alignSelf: 'flex-start'
  },
  mctDate: {
    fontSize: 12,
    color: '#C4C4C4',
    alignSelf: 'flex-start'
  },
  mctTime: {
    fontSize: 16,
    alignSelf: 'flex-start'
  },
  mctCarrierInfo: {
    color: '#C4C4C4',
    fontSize: 12,
    marginRight: 45
  },
  mctAboutDriver: {
    textDecorationLine: 'underline',
    fontSize: 12,
    color: '#9B4B9A'
  },
  chatLink: {
    fontSize: 12,
    color: '#9B4B9A',
    alignSelf: 'flex-start',
    textDecorationLine: 'underline',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  mctBottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FBFBFB',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  }
})
