import { Validator } from 'vee-validate'

export default function () {
  Validator.extend('onlyLetters', {
    getMessage: () => 'The city name must contain only letters',
    validate: value => value.split('').every(i => !i.match(/^[0-9]+$/))
  })

  Validator.extend('required', {
    getMessage: () => 'Chose a city',
    validate: value => value
  })
}
