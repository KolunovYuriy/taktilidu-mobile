import React, { Fragment } from 'react'
import { Image } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Item, Form, Input, Button, Text } from 'native-base'

import styles from '../styles'

import { icUserCircle, icUser, icMinus } from '../../../assets/images'

const validate = values => {
  const error = {}
  error.email = ''
  error.password = ''
  let ema = values.email
  let pass = values.password

  if (values.email === undefined) {
    ema = ''
  }
  if (values.password === undefined) {
    pass = ''
  }
  if (!values.password) {
    error.password = 'formData.passwordIsNotFilled'
  }
  if (!values.email) {
    error.email = 'formData.emailNotFilled'
  }
  // if(ema.length < 8 && ema !== ''){
  //   error.email= 'too short';
  // }
  if ((!ema.includes('@') && ema !== '') || (!ema.includes('.') && ema !== '')) {
    error.email = 'formData.emailIsNotCorrect'
  }
  if (pass.length > 8) {
    error.password = 'max 8 characters'
  }
  return error
}

renderPassengerFillInput = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
  let hasError = false
  if (error !== undefined) {
    hasError = true
  }

  return (
    <Input
      {...input}
      multiline
      maxLength={54}
      placeholder={placeholder}
      style={[styles.inputStyle, { maxHeight: 80 }]}
      placeholderTextColor="#fff"
    />
  )
}

const PassengerFillForm = ({ passengerAmount, onAddPassengerPress, onRemovePassengerPress }) => {
  const passengersList = Array.apply(null, Array(passengerAmount)).map(function(x, i) {
    return i
  })

  console.log('passengersList', passengersList)

  return (
    <Fragment>
      <Form>
        {passengersList.map((item, index) => (
          <Item key={index} style={styles.passengerFillItem}>
            <Image source={icUser} style={styles.icon} />
            <Field
              name={`passenger${index}`}
              component={this.renderPassengerFillInput}
              placeholder="Имя пассажира"
            />
            <Button transparent onPress={onRemovePassengerPress}>
              <Image source={icMinus} style={styles.iconMinus} />
            </Button>
          </Item>
        ))}
        <Button full rounded style={styles.passengerFillBtn} onPress={onAddPassengerPress}>
          <Text style={{ color: '#9B4B9A' }} uppercase={false}>
            Добавить пассажира
          </Text>
        </Button>
      </Form>
    </Fragment>
  )
}

export default reduxForm({
  form: 'passengerFillForm',
  validate
})(PassengerFillForm)
