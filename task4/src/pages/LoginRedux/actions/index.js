export const updateEmail = email => ({
  type: 'UPDATE_EMAIL'
})

export const updatePassword = password => ({
  type: 'UPDATE_PASSWORD'
})

export const updateEmailError = errorMsg => ({
  type: 'UPDATE_EMAIL_ERROR'
})

export const updatePasswordError = errorMsg => ({
  type: 'UPDATE_PASSWORD_ERROR'
})
