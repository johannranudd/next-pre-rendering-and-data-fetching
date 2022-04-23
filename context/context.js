import { createContext, useContext } from 'react';
import { useState, useReducer, useEffect } from 'react';
import { initialState, reducer } from './reducer';
import { getData } from '../utils/utils';
const url2 = `https://www.johann.one/wp-json/wc/v3/products?consumer_key=ck_665f152a7ef7923e561fd71862902f11f72672c9&consumer_secret=cs_bce68a8f771bf9355c3c48d304d3e50e530e2ae0`;

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [displayByCategory, setDisplayByCategory] = useState();

  const myFunction = async () => {
    // run asynchronous tasks here
    const data = await getData(url2);
    if (state.cart.length === 0) {
      dispatch({ type: 'INITIAL', payload: data });
    }
  };

  useEffect(() => {
    myFunction();
    state.cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state]);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.total, state.amount]);

  const handleIncrement = (id) => {
    dispatch({ type: 'INCREMENT', payload: id });
  };
  const handleDecrement = (id) => {
    dispatch({ type: 'DECREMENT', payload: id });
  };
  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    dispatch({ type: 'GET_TOTALS' });
  };
  const handleSortByCategory = (category) => {
    const filteredCart = state.cart.filter((item) => {
      if (category === 'all') {
        return item;
      } else {
        return item.categories[0].slug === category;
      }
    });
    setDisplayByCategory(filteredCart);
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        handleIncrement,
        handleDecrement,
        removeItemFromCart,
        handleSortByCategory,
        displayByCategory,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
