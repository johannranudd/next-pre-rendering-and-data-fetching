// import cookieCutter from 'cookie-cutter';
// import Cookie from 'cookie';
// import Cookies from 'cookies';
// import Cookies from 'cookies';
// import { setCookies } from 'cookies-next';

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
      action.payload.map((item) => {
        item.amountInCart = 0;
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(action.payload));

      //   console.log('initial');
      if (state.total > 0) {
        return {
          ...state,
          loading: false,
          data: action.payload,
          cart: localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : [],
        };
      } else {
        return {
          ...state,
          loading: false,
          data: action.payload,
          cart: action.payload,
        };
      }
    case 'INCREMENT':
      //   console.log(action.payload);
      const newCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amountInCart: item.amountInCart + 1 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
      const newTotal = state.total + 1;
      return {
        ...state,
        cart: localStorage.getItem('cart')
          ? JSON.parse(localStorage.getItem('cart'))
          : [],
        total: newTotal,
      };

    case 'DECREMENT':
      const decCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amountInCart: item.amountInCart - 1 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(decCart));
      const decTotal = state.total - 1;
      return {
        ...state,
        cart: localStorage.getItem('cart')
          ? JSON.parse(localStorage.getItem('cart'))
          : [],
        total: decTotal,
      };

    case 'REMOVE_FROM_CART':
      const removedArray = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amountInCart: 0 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(removedArray));
      return {
        ...state,
        cart: localStorage.getItem('cart')
          ? JSON.parse(localStorage.getItem('cart'))
          : [],
      };

    case 'GET_TOTALS':
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amountInCart } = cartItem;

          const itemTotal = price * amountInCart;

          cartTotal.total += itemTotal;
          cartTotal.amount += amountInCart;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    default:
      return state;
  }
};

export default reducer;
