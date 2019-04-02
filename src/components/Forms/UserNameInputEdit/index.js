import React, { Fragment } from 'react'
import { Image } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Item, Form, Input, Text } from 'native-base'

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
    error.email = 'Поле не заполнено'
  }
  // if(ema.length < 8 && ema !== ''){
  //   error.email= 'too short';
  // }
  if ((!ema.includes('@') && ema !== '') || (!ema.includes('.') && ema !== '')) {
    error.email = 'Почта не корректна'
  }
  if (pass.length > 8) {
    error.password = 'max 8 characters'
  }
  return error
}

renderUserNameInputEdit = ({
  input,
  onInputBlur,
  onInputFocus,
  inputRef,
  meta: { touched, error, warning }
}) => {
  let hasError = false
  if (error !== undefined) {
    hasError = true
  }

  return (
    <Item style={styles.item} error={touched && hasError}>
      <Input
        {...input}
        style={styles.listItemInput}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        ref={inputRef}
        placeholder={'user@example.com'}
        placeholderTextColor="#ccc"
      />
      {touched && hasError && <Text style={styles.errorText}>{error}</Text>}
    </Item>
  )
}

const UserNameInputEditForm = props => {
  return (
    <Fragment>
      <Field
        name="name"
        inputRef={props.inputRef}
        component={this.renderUserNameInputEdit}
        type="name"
        onInputFocus={props.onInputFocus}
        onInputBlur={props.onInputBlur}
      />
    </Fragment>
  )
}

export default reduxForm({
  form: 'userNameInputEdit',
  touchOnChange: true,
  touchOnBlur: true,
  validate
})(UserNameInputEditForm)
