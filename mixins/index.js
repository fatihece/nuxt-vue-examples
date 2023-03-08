import { format } from 'date-fns'
export default {
  filters: {
    toFixed2: function (value) {
      return parseFloat(value).toFixed(2)
    },
    format: function (value) {
      return format(new Date(value), 'MM-dd-yyyy HH:mm')
    },
  },
  data: () => ({
    specialRules: [
      (v) => !!v || 'Field is Required',
      (v) =>
        (v.length > 3 && /^[a-zA-Z-]+$/.test(v)) ||
        'Please use only legal characters and dont use whitespace in text.',
    ],
    transactionPrice: [
      (v) => !!v || 'The amount to be transferred must be greater than 0',
      (v) => v !== 0 || 'Please use a correct Wallet Token',
    ],
    transferRules: [
      (v) => !!v || 'Wallet Token is required!',
      (v) =>
        (v.length !== 0 && v.length === 44) ||
        'Please use a correct Wallet Token',
    ],
    nameRules: [
      (v) => !!v || 'The field is required.',
      (v) => {
        return (
          (v && v.trim().split(' ').length > 1) ||
          'Field must be at least 2 characters and maximum 45 characters'
        )
      },
    ],
    emailRules: [
      (v) => !!v || 'Please enter a valid email.',
      (v) =>
        (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(v) &&
          v.length < 45) ||
        'Please use a valid email address.',
    ],
    passwordRules: [
      (v) => !!v || 'Password field is required.',
      (v) =>
        (v && v.length >= 8 && v.length <= 16) ||
        'Password length must be at least 8 characters and at most 16 characters.',
    ],
    creditCardRules: {
      number: [
        (v) => !!v || 'The field is required.',
        (v) =>
          (v && v.length >= 15) ||
          'Credit card number length must be at least 15 characters.',
      ],
      expireDate: [
        (v) => !!v || 'The field is required.',
        (v) => (v && v.length >= 5) || 'Please enter a valid date.',
      ],
      cvc: [
        (v) => !!v || 'The field is required.',
        (v) =>
          (v && v.length >= 3) ||
          'CVC code length must be at least 3 characters.',
      ],
    },
    textRules: [
      (v) => !!v || 'The field is required.',
      (v) =>
        (v && v.length >= 2 && v.length <= 45) ||
        'Field must be at least 2 characters and maximum 45 characters',
    ],
    messageRules: [
      (v) => !!v || 'The field is required.',
      (v) =>
        (v && v.length >= 2 && v.length <= 200) ||
        'Field at least to be min 2 and max 200 characters .',
    ],
    specialMessage: [
      (v) => v.length <= 100 || 'Field can be max 100 characters .',
    ],
    zipcodeRules: [
      (v) => !!v || 'The field is required.',
      (v) => (v && v.length >= 5) || 'Please enter a valid zip code.',
    ],
    phoneRules: [
      (v) => !!v || 'The field is required.',
      (v) => (v && v.length >= 10) || 'Please enter a valid phone number.',
    ],
    identifyRules: [
      (v) => !!v || 'Lütfen Bu Alanı Doldurunuz. ',
      (v) => v.length === 11 || 'Lütfen Geçerli bir telefon numarası giriniz.',
    ],
    numberRules: [
      (v) => !!v || 'The field is required.',
      (v) =>
        /^[0-9]+(\.[0-9]{1,2})?$/gm.test(v) || 'Please enter a valid number.',
    ],
    selectionRules: [
      (v) => !!v || 'Lütfen Bu Alanı Doldurunuz. ',
      (v) => v !== null || 'Lütfen Alan Seçiniz.',
    ],
    fileRules: [(v) => !!v || 'Lütfen Bu Alanı Doldurunuz. '],
  }),
}
