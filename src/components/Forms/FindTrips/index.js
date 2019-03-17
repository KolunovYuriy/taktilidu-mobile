import React, { Fragment } from 'react'
import { Image } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Item, Form, Input } from 'native-base'

import { icFrom, icTo, icUsers, icTime } from '../../../assets/images'

import styles from './styles'

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

renderFindTripInput = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
  let hasError = false
  if (error !== undefined) {
    hasError = true
  }

  return (
    <Input
      {...input}
      placeholder={placeholder}
      secureTextEntry={type === 'password'}
      style={styles.inputStyle}
      placeholderTextColor="#818181"
    />
  )
}

const FindTripsForm = props => {
  return (
    <Fragment>
      <Form>
        <Item style={styles.formGroup}>
          <Image source={icFrom} style={styles.icon} />
          <Field
            name="email"
            component={this.renderFindTripInput}
            type="email"
            placeholder={'Откуда вы едите?'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Image source={icTo} style={styles.icon} />
          <Field
            name="phone"
            component={this.renderFindTripInput}
            type="phone"
            placeholder={'Куда вы едите?'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Image source={icTime} style={styles.icon} />
          <Field
            name="password"
            component={this.renderFindTripInput}
            type="password"
            placeholder={'Желаемая дата, время?'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Image source={icUsers} style={styles.icon} />
          <Field
            name="password"
            component={this.renderFindTripInput}
            type="password"
            placeholder={'Количество пассажиров'}
          />
        </Item>
      </Form>
    </Fragment>
  )
}

export default reduxForm({
  form: 'findTrip',
  validate
})(FindTripsForm)
