// Coloque aqui suas actions
const SAVE_USER = 'SAVE_USER';
const SET_CURRENCIES = 'SET_CURRENCIES';
const SAVE_EXPENSE = 'SAVE_EXPENSE';

const saveUser = (user) => ({
  type: SAVE_USER,
  payload: user,
});

const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  payload: expense,
});

const saveAllExpenses = (expense) => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const currencies = await fetch(url);
  const json = await currencies.json();
  const newExpense = { ...expense, exchangeRates: { ...json } };
  dispatch(saveExpense(newExpense));
};

const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});

const getCurrencies = () => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const currencies = await fetch(url);
  const json = await currencies.json();
  const currencyKeys = Object.keys(json).filter((moeda) => moeda !== 'USDT');
  dispatch(setCurrencies(currencyKeys));
};

export {
  SAVE_USER,
  SAVE_EXPENSE,
  SET_CURRENCIES,
  saveUser,
  saveExpense,
  saveAllExpenses,
  getCurrencies,
};
