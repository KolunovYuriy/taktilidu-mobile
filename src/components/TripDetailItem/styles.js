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
    borderWidth: 1,
    borderColor: '#F4F4F4'
    // shadowColor: 'rgba(0, 0, 0, 0.1)',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.8,
    // shadowRadius: 3,
    // elevation: 1
  },
  // Sections ends
  // Text styles
  sectionLabel: {
    textAlign: 'left',
    width: '100%',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  label: {
    color: '#C4C4C4',
    fontSize: 12,
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
    paddingLeft: 10,
    fontSize: 14
  },
  moreButton: {
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
    fontWeight: 'bold'
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
  // Icon styles starts
  // Button styles starts
  reserveButton: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: 'transparent'
  },
  linearGradient: {
    width: '100%',
    marginTop: 24,
    alignSelf: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderColor: '#0D25B9'
  }
  //
})
