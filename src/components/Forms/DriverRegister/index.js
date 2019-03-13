import React, { Fragment } from 'react'
import { Image } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Item, Form, Input } from 'native-base'

import styles from '../styles'

import { icEmail, icHide, icLock, icPhone, icUser, icAttachment } from '../../../assets/images'

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

const DriverRegisterForm = props => {
  return (
    <Fragment>
      <Form>
        <Item style={styles.formGroup}>
          <Field name="name" component={this.renderInput} type="name" placeholder={'Машина'} />
        </Item>
        <Item style={styles.formGroup}>
          <Field
            name="phone"
            component={this.renderInput}
            type="phone"
            placeholder={'Номер лицензии'}
          />
          <Image source={icAttachment} style={styles.icon} />
        </Item>
        <Item style={styles.formGroup}>
          <Field
            name="email"
            component={this.renderInput}
            type="email"
            placeholder={'Количество мест в машине'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Field
            name="password"
            component={this.renderInput}
            type="password"
            placeholder={'Компания перевозчик'}
          />
        </Item>
      </Form>
    </Fragment>
  )
}

export default reduxForm({
  form: 'driverRegister',
  validate
})(DriverRegisterForm)
