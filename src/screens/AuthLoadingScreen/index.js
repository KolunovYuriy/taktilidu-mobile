import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Spinner } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

class AuthLoadingScreen extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Auth'), 500)
  }

  render() {
    return (
      <Container>
        <LinearGradient
          useAngle
          angle={110.44}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1, justifyContent: 'center' }}
          colors={['#FD6585', '#0D25B9']}
        >
          <Spinner color="#fff" />
        </LinearGradient>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    isRehydrated: state.reducers.isRehydrated
  }
}

export default connect(mapStateToProps)(AuthLoadingScreen)
