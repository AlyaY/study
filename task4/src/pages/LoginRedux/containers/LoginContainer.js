import { connect } from 'react-redux'
import LoginForm from '../views/LoginForm'
import { validations, errorMessages } from '../constants'

const mapStateToProps = state => ({
  password: '',
  email: '',
  errorPassword: '',
  errorEmail: ''
})

const mapDispatchToProps = dispatch => ({
  onSubmit: event => dispatch(handleSubmit(event)),
  onChange: event => dispatch(handleChange(event)),
})

const handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value })
}

const validateField = (name, value) => {
  switch (name) {
    case 'email' :
      return validations.email.test(value) ? '' : errorMessages.email;
    case 'password' :
      return validations.password.test(value) ? '' : errorMessages.password;
    default:
      break;
  }

  return ''
}

const handleSubmit = (event) => {
  event.preventDefault();

  const errorPassword = validateField('password', this.state.password);
  const errorEmail = validateField('email', this.state.email);

  if (!errorPassword && !errorEmail) {
    console.log(JSON.stringify(this.state));

    this.setState({
      password: '',
      email: '',
      errorPassword: '',
      errorEmail: ''
    })
  } else {
    this.setState({
      errorPassword,
      errorEmail
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
