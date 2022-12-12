import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import App from '../App';
import { renderWithRedux, renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testes da page Login', () => {
  it('testando se input de email aparece na tela', () => {
    renderWithRedux(<Login />);

    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
  });
  it('testando se input de senha aparece na tela', () => {
    renderWithRedux(<Login />);

    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
  });
  it('testando se email fica salvo na store', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByRole('button');

    userEvent.type(emailInput, 'lucas@gmail.com');
    userEvent.type(passwordInput, 'xablau12');
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
