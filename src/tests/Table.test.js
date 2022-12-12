import React from 'react';
// import { screen } from '@testing-library/react';
import Table from '../components/Table';
import { renderWithRedux } from './helpers/renderWith';

describe('Testes do component Table', () => {
  it('testando se email do user aparece na tela', () => {
    renderWithRedux(<Table />);
  });
});
