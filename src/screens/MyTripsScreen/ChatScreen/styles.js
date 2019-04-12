import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  accordion: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: -16
  },
  accordionHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: '#D9D9D9',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 0
  },
  accordionHeaderText: {
    fontWeight: '300'
  },
  accordionContent: {
    backgroundColor: 'transparent',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    paddingLeft: 0,
    paddingBottom: 15,
    marginLeft: 0
  },
  accordionContentText: {
    fontSize: 12,
    fontWeight: '300'
  },
  iconArrow: {
    width: 10,
    height: 10
  },
  // HelpChatList styles starts
  helpChatList: {
    marginTop: -16,
    marginLeft: 5,
    marginRight: 5
  },
  verticalSection: {
    flexDirection: 'column'
  },
  horizontalSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  helpChatListItem: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 16,
    paddingBottom: 8,
    marginLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  helpChatListItemText: {
    fontWeight: '300',
    fontSize: 16
  },
  helpChatListItemTime: {
    marginRight: 5,
    color: '#818181',
    fontSize: 12
  },
  helpChatListItemOpen: {
    color: '#9B4B9A',
    textDecorationLine: 'underline',
    fontSize: 12
  },
  iconRightThinArrow: {
    resizeMode: 'contain',
    height: 13
  },
  // HelpChatList styles ends
  // Help chat screen starts
  helpChatMessageSection: {},
  helpChatTitleSection: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9'
  },
  chatAttachment: {
    resizeMode: 'contain',
    tintColor: '#9B4B9A',
    marginLeft: 10,
    width: 18,
    height: 18
  },
  // Chat styles
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginRight: 15
  },
  bubbleName: {
    marginRight: 10,
    fontSize: 14,
    color: '#9B4B9A'
  },
  bubbleDate: {
    fontSize: 14,
    color: '#818181'
  },
  leftBubbleText: {
    marginLeft: 15,
    paddingTop: 10,
    paddingBottom: 24
  },
  rightBubbleText: {
    textAlign: 'right',
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 24
  },
  rightHorizontalSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  leftHorizontalSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
