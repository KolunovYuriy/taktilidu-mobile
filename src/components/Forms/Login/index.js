import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Container, Button, Icon, Item, Text, Form, Label, Content, Input } from 'native-base'
import styles from '../styles'

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
    <Item error={touched && hasError} style={styles.item}>
      <Input
        {...input}
        placeholder={placeholder}
        secureTextEntry={type === 'password'}
        style={styles.inputStyle}
        placeholderTextColor="#fff"
      />
      {hasError && touched ? <Text style={styles.errorStyle}>{error}</Text> : <Text />}
    </Item>
  )
}

const LoginForm = props => {
  return (
    <Fragment>
      <Form>
        <Item style={styles.formGroup}>
          <Field
            name="email"
            component={this.renderInput}
            type="email"
            placeholder={'Ваша почта'}
            placeholderTextColor="#000"
          />
        </Item>
      </Form>
    </Fragment>
  )
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm)
