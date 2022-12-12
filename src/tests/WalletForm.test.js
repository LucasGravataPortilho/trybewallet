import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WalletFrom from '../components/WalletForm';
import { renderWithRedux } from './helpers/renderWith';

describe('Testes do component WalletForm', () => {
  it('testando se input de despesas está na tela', () => {
    renderWithRedux(<WalletFrom />);

    const valueInput = screen.getByTestId('value-input');
    expect(valueInput).toBeInTheDocument();
  });
  it('testando se input de descrição está na tela', () => {
    renderWithRedux(<WalletFrom />);

    const descriptionInput = screen.getByTestId('description-input');
    expect(descriptionInput).toBeInTheDocument();
  });
  it('testando se select de moedas está na tela', () => {
    renderWithRedux(<WalletFrom />);

    const currencySelect = screen.getByTestId('currency-input');
    expect(currencySelect).toBeInTheDocument();
  });
  it('testando se select de métodos de pagamento está na tela', () => {
    renderWithRedux(<WalletFrom />);

    const methodSelect = screen.getByTestId('method-input');
    expect(methodSelect).toBeInTheDocument();
  });
  it('testando se select de tags está na tela', () => {
    renderWithRedux(<WalletFrom />);

    const tagsSelect = screen.getByTestId('tag-input');
    expect(tagsSelect).toBeInTheDocument();
  });
  it('testando click do button', () => {
    renderWithRedux(<WalletFrom />);

    const valueInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');
    const currencySelect = screen.getByTestId('currency-input');
    const methodSelect = screen.getByTestId('method-input');
    const tagsSelect = screen.getByTestId('tag-input');
    const button = screen.getByRole('button');

    userEvent.type(valueInput, '200');
    userEvent.type(descriptionInput, 'carro');
    userEvent.type(currencySelect, 'EUR');
    userEvent.type(methodSelect, 'Dinheiro');
    userEvent.type(tagsSelect, 'Lazer');
    userEvent.click(button);
  });
});
