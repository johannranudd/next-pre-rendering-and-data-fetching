import cookieCutter from 'cookie-cutter';

export const initialState = {
  data: null,
  cart: [],
  amount: 0,
  total: 0,
  loading: false,
  error: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL':
      console.log(action.payload);
      //   localStorage.set('cart');
      cookieCutter.set('myCookie', JSON.stringify(action.payload));
      //   cookieCutter.set('myCookie', action.payload);
      //   const cookie = cookieCutter.get('myCookie');
      //   const pCookie = JSON.parse(cookie);
      //   console.log('cookie:', cookie);
      //   console.log(pCookie);
      return state;
    default:
      return state;
  }
};

export default reducer;
