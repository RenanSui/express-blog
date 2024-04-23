export function isEmailValid(email: string) {
  const isValid = email.match(
    /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  )?.[0]

  return !!isValid
}

export function isPasswordValid(password: string) {
  // const isValid = password.match(/^[a-z0-9]+$/)
  const isValid = password.match(/(?=.*[a-z0-9]).{8,16}$/)
  return !!isValid
}
