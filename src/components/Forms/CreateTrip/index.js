import React, { Fragment } from 'react'
import { Image } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Item, Form, Input, View, Label, Button, Icon, Text } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment/min/moment-with-locales'

import { icFrom, icTo, icUsers, icTime, icCoins, icLocation } from '../../../assets/images'

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

renderCreateTripInput = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
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

renderOfferTripDatepicker = ({
  input,
  isDatetimepickerVisible,
  onPressDatetimepicker,
  onDatetimepickerCancel,
  type,
  meta: { touched, error, warning }
}) => {
  let hasError = false
  if (error !== undefined) {
    hasError = true
  }
  moment.locale('ru')

  return (
    <View style={styles.datepickerStyle}>
      {input.value ? (
        <Text onPress={onPressDatetimepicker} style={styles.time}>
          {moment(input.value).format('D MMMM YYYY, H:mm')}
        </Text>
      ) : (
        <Text onPress={onPressDatetimepicker} style={styles.timePlaceholder}>
          Желаемая дата, время?
        </Text>
      )}

      <DateTimePicker
        mode="datetime"
        cancelTextIOS="Отмена"
        confirmTextIOS="Подтвердить"
        isVisible={isDatetimepickerVisible}
        hideTitleContainerIOS
        datePickerModeAndroid="spinner"
        minimumDate={new Date()}
        date={input.value ? new Date(input.value) : new Date()}
        onConfirm={date => {
          const formattedDate = moment(date).format()
          input.onChange(formattedDate)
          onDatetimepickerCancel()
        }}
        onCancel={onDatetimepickerCancel}
      />
    </View>
  )
}

renderCreateTripCounter = ({
  input,
  placeholder,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  let hasError = false
  if (error !== undefined) {
    hasError = true
  }

  if (!input.value) {
    input.onChange(1)
  }

  return (
    <View style={styles.counterStyle}>
      <Label style={styles.amountLabel}>{label}</Label>
      <View style={{ flexDirection: 'row' }}>
        <Button
          iconLeft
          rounded
          style={styles.buttonMinusStyle}
          onPress={() => input.value !== 1 && input.onChange(input.value - 1)}
        >
          <Icon name="ios-remove" style={styles.iconMinusStyle} />
        </Button>
        <Text style={styles.amountValue}>{input.value}</Text>
        <Button
          iconLeft
          rounded
          style={styles.buttonPlusStyle}
          onPress={() => input.value !== 20 && input.onChange(input.value + 1)}
        >
          <Icon name="ios-add" style={styles.iconPlusStyle} />
        </Button>
      </View>
    </View>
  )
}

const CreateTripForm = props => {
  return (
    <Fragment>
      <Form style={styles.form}>
        <Item style={styles.formGroup}>
          <Image source={icFrom} style={styles.icon} />
          <Field
            name="email"
            component={this.renderCreateTripInput}
            type="email"
            placeholder={'Откуда вы едете?'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Image source={icTo} style={styles.icon} />
          <Field
            name="phone"
            component={this.renderCreateTripInput}
            type="phone"
            placeholder={'Куда вы едете?'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Image source={icLocation} style={styles.icon} />
          <Field
            name="intermediate"
            component={this.renderCreateTripInput}
            placeholder={'Промежуточные пункты?'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Image source={icTime} style={styles.icon} />
          <Field
            name="time"
            isDatetimepickerVisible={props.isDatetimepickerVisible}
            onPressDatetimepicker={props.onPressDatetimepicker}
            onDatetimepickerCancel={props.onDatetimepickerCancel}
            component={this.renderOfferTripDatepicker}
            placeholder={'Желаемая дата, время?'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Image source={icUsers} style={styles.icon} />
          <Field
            name="amount"
            component={this.renderCreateTripCounter}
            label={'Количество пассажиров'}
          />
        </Item>
        <Item style={styles.formGroup}>
          <Image source={icCoins} style={styles.icon} />
          <Field
            name="price"
            component={this.renderCreateTripInput}
            placeholder={'Цена за место'}
          />
        </Item>
      </Form>
    </Fragment>
  )
}

export default reduxForm({
  form: 'createTrip',
  validate
})(CreateTripForm)
