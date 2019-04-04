import React, { Component } from 'react'
import { Container, Text } from 'native-base'
import ScreenLabel from '../../components/ScreenLabel'
import Content from '../../components/MainContent'
import { connect } from 'react-redux'

export class TicketsScreen extends Component {
  render() {
    return (
      <Container>
        <Content padding={7}>
          <ScreenLabel mainText="Поддержка" noHeader />
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
)(TicketsScreen)
