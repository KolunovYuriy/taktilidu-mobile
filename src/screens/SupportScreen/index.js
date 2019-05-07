import React, { Component, Fragment } from 'react'
import { Image, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Container, Text, Accordion, View } from 'native-base'
import ScreenLabel from '../../components/ScreenLabel'
import Content from '../../components/MainContent'
import { ContactUs } from '../../components/ContacUs'

import styles from './styles'
import {
  icUpArrow,
  icDownArrow,
  icRightThinArrow,
  icDownThinArrow,
  icArrowDown
} from '../../assets/images'

const dataArray = [
  {
    title: 'Как это работает',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Вопросы и ответы',
    contentType: 'horizontallyScrollableSection',
    content: 'Lorem ipsum dolor sit amet'
  }
]

const dataArray2 = [
  {
    title: 'Название распространенной проблемы',
    listKey: 1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Название распространенной проблемы',
    listKey: 2,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Название распространенной проблемы',
    listKey: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Название распространенной проблемы',
    listKey: 4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

export class SupportScreen extends Component {
  _renderHeader = (item, expanded) => {
    const { navigation } = this.props
    return (
      <Fragment>
        <View
          style={[
            styles.accordionHeader,
            {
              borderBottomWidth: expanded ? 0 : 1
            }
          ]}
        >
          <Text style={styles.accordionHeaderText}>{item.title}</Text>
          {expanded ? (
            <Image source={icUpArrow} style={styles.iconArrow} />
          ) : (
            <Image source={icDownArrow} style={styles.iconArrow} />
          )}
        </View>
      </Fragment>
    )
  }

  _renderSSHeader = (item, expanded) => {
    const { navigation } = this.props
    return (
      <Fragment>
        <View style={styles.accordionSSHeader}>
          <Text style={styles.accordionSSHeaderText}>{item.title}</Text>
          {expanded ? (
            <Image source={icArrowDown} style={styles.iconArrow} />
          ) : (
            <Image source={icRightThinArrow} style={[styles.iconArrow, { tintColor: '#000000' }]} />
          )}
        </View>
      </Fragment>
    )
  }

  _renderSSContent = item => {
    return (
      <View style={styles.accordionSSContent}>
        <Text style={styles.accordionSSContentText}>{item.content}</Text>
      </View>
    )
  }

  renderScrollableSection = () => {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[{ key: 'a' }, { key: 'b' }]}
        renderItem={({ item, index }) => (
          <Accordion
            key={index}
            animation={false}
            expanded
            renderHeader={this._renderSSHeader}
            renderContent={this._renderSSContent}
            style={[styles.accordionSS, index === 0 && { marginRight: 30 }]}
            dataArray={dataArray2}
          />
        )}
      />
    )
  }

  _renderContent = item => {
    switch (item.contentType) {
      case 'horizontallyScrollableSection':
        return <Fragment>{this.renderScrollableSection()}</Fragment>
      default:
        return (
          <View style={styles.accordionContent}>
            <Text style={styles.accordionContentText}>{item.content}</Text>
          </View>
        )
    }
  }

  render() {
    return (
      <Container>
        <ScreenLabel screenType="Support" mainText="Связаться с нами" noHeader />
        <Content padding={15}>
          <Accordion
            animation={false}
            expanded
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            style={styles.accordion}
            dataArray={dataArray}
          />
          <Text style={[styles.accordionHeader, styles.accordionHeaderText]}>
            Написать сообщение
          </Text>
          <ContactUs />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportScreen)
