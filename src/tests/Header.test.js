import React from 'react';
import { screen } from '@testing-library/react';
import Header from '../components/Header';
import { renderWithRedux } from './helpers/renderWith';

describe('Testes do component Header', () => {
  it('testando se email do user aparece na tela', () => {
    renderWithRedux(<Header />);

    const userEmail = screen.getByTestId('email-field');
    expect(userEmail).toBeInTheDocument();

    const userTotal = screen.getByTestId('total-field');
    expect(userTotal).toBeInTheDocument();
    expect(userTotal).toHaveTextContent('0.00');

    const moeda = screen.getByTestId('header-currency-field');
    expect(moeda).toBeInTheDocument();
    expect(moeda).toHaveTextContent('BRL');
  });
});
