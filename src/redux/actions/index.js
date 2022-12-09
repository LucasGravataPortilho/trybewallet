// Coloque aqui suas actions
const SAVE_USER = 'SAVE_USER';
const SET_CURRENCIES = 'SET_CURRENCIES';

const saveUser = (user) => ({
  type: SAVE_USER,
  payload: user,
});

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
  SET_CURRENCIES,
  saveUser,
  getCurrencies,
};
