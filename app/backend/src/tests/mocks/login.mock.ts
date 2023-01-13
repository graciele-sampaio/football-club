const loginsuccess = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}

const loginWithoutEmail = {
  password: 'secret_admin',
}

const loginWithoutPassword = {
  email: 'admin@admin.com',
}

const invalidEmail = {
  email: 'any@any.com',
  password: 'secret_admin',
}

const invalidPassword = {
  email: 'admin@admin.com',
  password: 'secret_any',
}


export {
  loginsuccess,
  loginWithoutEmail,
  loginWithoutPassword,
  invalidEmail,
  invalidPassword,
}


