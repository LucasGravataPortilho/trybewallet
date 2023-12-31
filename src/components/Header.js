import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        {expenses.length === 0 ? (
          <p data-testid="total-field">0.00</p>
        ) : (
          <p data-testid="total-field">
            {expenses.reduce((acc, { currency, value, exchangeRates }) => (
              { ...acc, value: acc.value + value * exchangeRates[currency].ask }
            ), { value: 0, exchangeRates: {} }).value.toFixed(2)}
          </p>
        )}
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
