export const validations = {
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /[^]{6,}/,
};

export const errorMessages = {
  name: '"Name" must be more than 4 symbols',
  surname: '"Surname" must be more than 4 symbols',
  email: 'Envalid email',
  password: 'Envalid password',
};
