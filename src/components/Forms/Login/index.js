import React, { Fragment } from 'react'
import { Image } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Item, Form, Input } from 'native-base'

import styles from '../styles'

import { icEmail, icHide, icLock, icShare } from '../../../assets/images'

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

renderInput = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
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
      placeholderTextColor="#fff"
    />
  )
}

const LoginForm = props => {
  return (
    <Fragment>
      <Form>
        <Item style={styles.formGroup}>
          <Image source={icShare} style={styles.icon} />
          <Field
            name="phone"
            component={this.renderInput}
            type="phone"
            placeholder={'Ваш номер телефона или email*'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Image source={icLock} style={styles.icon} />
          <Field
            name="password"
            component={this.renderInput}
            type="password"
            placeholder={'Ваш пароль'}
          />
          <Image source={icHide} style={styles.icon} />
        </Item>
      </Form>
    </Fragment>
  )
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm)
