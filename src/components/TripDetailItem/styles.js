import { StyleSheet, Platform, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  // Sections starts
  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  horizontalSection: {
    flexDirection: 'row',
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
    paddingRight: 0,
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#FBFBFB'
  },
  tRListItem: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    width: '100%',
    height: 190,
    marginBottom: 4,
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
  tDListItem: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    width: '100%',
    height: 520,
    marginBottom: 4,
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
  tripDetailItemSection: {
    paddingBottom: 8
  },
  verticalSection: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  orderStatus: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FBFBFB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 16,
    marginBottom: 8
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
  statusInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  statusText: {
    fontSize: 14,
    paddingLeft: 5
  },
  icCheck: {
    resizeMode: 'contain',
    width: 20,
    height: 10,
    marginLeft: 5
  },
  icMore: {
    marginLeft: -5,
    height: 4,
    width: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-end'
  },
  icX: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
    marginRight: 8
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
  groupDetailSection: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5
  },
  groupDetail: {
    fontSize: 14,
    color: '#9B4B9A',
    textDecorationLine: 'underline',
    paddingBottom: 5
  },
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
  TDlabel: {
    color: '#C4C4C4',
    fontSize: 14,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingBottom: 5
  },
  tDGroupLabel: {
    color: '#9B4B9A',
    fontSize: 14
  },
  tDLabel: {
    color: '#C4C4C4',
    fontSize: 14,
    paddingTop: 10,
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  textStyle: {
    fontSize: 12,
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  tDtextStyle: {
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center'
  },
  carrierInfo: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
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
    fontSize: 16,
    color: '#9B4B9A',
    textAlign: 'center',
    alignSelf: 'center'
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
    height: 190,
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
  mctCarrierSection: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    width: '70%',
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
  mctPrice: {
    fontSize: 16,
    alignSelf: 'flex-start',
    color: '#9B4B9A',
    paddingTop: 14
  },
  mctCarrierInfo: {
    color: '#C4C4C4',
    fontSize: 12
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
    paddingTop: 11,
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
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    paddingBottom: 16
  },
  icInfo: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginTop: 3,
    marginRight: 8
  },
  textInfo: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 14,
    color: '#9B4B9A',
    fontFamily: 'OpenSans-Light'
  }
})
