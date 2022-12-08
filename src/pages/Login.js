import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUser } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.validButton = this.validButton.bind(this);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validButton());
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(saveUser(email));
    history.push('/carteira');
  };

  validButton() {
    const { email, password } = this.state;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const emailTest = emailRegex.test(email);
    const limit = 6;
    if (emailTest && password.length >= limit) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />

        <input
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />

        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ disabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(mapStateToProps)(Login);
