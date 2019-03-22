import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Spinner } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

class AuthLoadingScreen extends Component {
  componentDidUpdate(prevProps) {
    console.log(prevProps.isRehydrated)
    console.log(this.props.isRehydrated)
    if (this.props.isRehydrated) {
      this.props.navigation.navigate('Auth')
    }
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
    isRehydrated: state._persist.rehydrated
  }
}

export default connect(mapStateToProps)(AuthLoadingScreen)
