import React, { Fragment } from 'react'
import { Image, Keyboard } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Item, Form, Input, Text, Textarea, View, Button } from 'native-base'

import { icFrom, icTo, icUsers, icTime, icStar } from '../../../assets/images'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

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

const ratingAmount = [{}, {}, {}, {}, {}]

renderDriverFeedbackTextArea = ({ input, meta: { touched, error, warning } }) => {
  let hasError = false
  if (error !== undefined) {
    hasError = true
  }

  return (
    <Item style={styles.formGroup}>
      <Textarea
        {...input}
        style={styles.listItemInput}
        rowSpan={14}
        placeholder="Оставьте отзыв о поездке..."
        placeholderTextColor="#BABABA"
        multiline
        blurOnSubmit
        onSubmitEditing={Keyboard.dismiss}
      />
    </Item>
  )
}

renderDriverFeedbackRating = ({ input, meta: { touched, error, warning } }) => {
  let hasError = false
  if (error !== undefined) {
    hasError = true
  }

  return (
    <View style={styles.ratingFormGroup}>
      {ratingAmount.map((item, index) => (
        <Button
          transparent
          style={styles.ratingButton}
          key={index}
          onPress={() => input.onChange(index)}
        >
          <Image
            source={icStar}
            style={[styles.rating, index <= input.value && styles.activeRating]}
          />
        </Button>
      ))}
    </View>
  )
}

const DriverFeedbackForm = props => {
  return (
    <Fragment>
      <Field name="rating" component={this.renderDriverFeedbackRating} />
      <Field
        name="feedback"
        inputRef={props.inputRef}
        component={this.renderDriverFeedbackTextArea}
      />
    </Fragment>
  )
}

export default reduxForm({
  form: 'driverFeedback',
  validate
})(DriverFeedbackForm)
