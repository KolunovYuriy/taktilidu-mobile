import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  section: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 14,
    marginBottom: 24,
    marginLeft: 5,
    marginRight: 5
  },
  sectionWithHeader: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 32,
    marginBottom: 24,
    marginLeft: 5,
    marginRight: 5
  },
  sectionWithLogo: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    fontSize: 24,
    color: '#000'
  },
  additionalText: {
    color: '#9B4B9A'
  },
  screenLabel: {
    width: '100%',
    height: height / 3 - 50
  },
  imgBG: {
    width: '100%',
    height: '100%',
    transform: [{ rotateY: '180deg' }]
  },
  supportText: {
    fontSize: 24,
    color: '#fff',
    position: 'absolute',
    bottom: 15,
    left: 15,
    zIndex: 10
  }
})
