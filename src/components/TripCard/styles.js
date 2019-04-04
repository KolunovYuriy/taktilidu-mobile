import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  horizontalSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  cardItem: {
    overflow: 'visible',
    width: 230,
    marginRight: 45,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 24,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  circlePlusButton: {
    position: 'absolute',
    right: -13,
    zIndex: 10000,
    overflow: 'visible',
    height: '100%'
  },
  circlePlus: {
    resizeMode: 'contain',
    width: 26,
    height: 26
  },
  city: {
    fontSize: 14,
    fontFamily: 'OpenSans-Light',
    paddingBottom: 15
  },
  cityNameSection: {
    paddingTop: 15
  },
  priceSection: {
    paddingLeft: 18,
    justifyContent: 'center'
  },
  priceText: {
    textAlign: 'right',
    fontSize: 14,
    color: '#9B4B9A'
  }
})
