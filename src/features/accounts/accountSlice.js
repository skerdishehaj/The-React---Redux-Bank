// ! Here we take just one slice of the global state, which is the account slice.

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

// ! Reducers must be pure functions, which means they must not mutate the state. (no side effects)
export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case 'account/requestLoan':
      if (state.loan > 0) return state;
      // ! later
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };

    case 'account/convertCurrency':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };

  return async (dispatch) => {
    dispatch({ type: 'account/comvertCurrency' });
    console.dir(dispatch);
    //API call
    const host = 'api.frankfurter.app';
    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`,
    );
    const data = await res.json();
    const convertedAmount = data.rates.USD;

    //return action
    dispatch({ type: 'account/deposit', payload: convertedAmount });
  };
}
export function withdraw(amount) {
  return {
    type: 'account/withdraw',
    payload: amount,
  };
}
export function requestLoan(purpose, amount) {
  return {
    type: 'account/requestLoan',
    payload: { purpose: purpose, amount: amount },
  };
}
export function payLoan() {
  return {
    type: 'account/payLoan',
  };
}
