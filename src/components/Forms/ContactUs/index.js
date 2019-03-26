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

renderContactUsInput = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
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

const ContactUsForm = props => {
  return (
    <Fragment>
      <Form style={styles.form}>
        <Item style={styles.formGroup}>
          <Field
            name="name"
            component={this.renderContactUsInput}
            type="name"
            placeholder={'Ваше имя *'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Field
            name="email"
            component={this.renderContactUsInput}
            type="email"
            placeholder={'Ваш email *'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Field
            name="message"
            component={this.renderContactUsInput}
            type="message"
            placeholder={'Сообщение *'}
          />
        </Item>
      </Form>
    </Fragment>
  )
}

export default reduxForm({
  form: 'contactUs',
  validate
})(ContactUsForm)
