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
  // eslint-disable-next-line no-useless-escape
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
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
  if (!reg.test(ema) && ema !== '') {
    error.email = 'Некорректный email'
  }
  if (pass.length > 8) {
    error.password = 'max 8 characters'
  }
  return error
}

renderUserEmailInputEdit = ({
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

const UserEmailInputEditForm = props => {
  return (
    <Fragment>
      <Field
        name="email"
        inputRef={props.inputRef}
        component={this.renderUserEmailInputEdit}
        type="email"
        onInputFocus={props.onInputFocus}
        onInputBlur={props.onInputBlur}
      />
    </Fragment>
  )
}

export default reduxForm({
  form: 'userEmailInputEdit',
  touchOnChange: true,
  touchOnBlur: true,
  validate
})(UserEmailInputEditForm)
