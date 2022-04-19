import { createContext, useContext } from 'react';
import { useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, setState] = useState(null);

  const handleClick = () => {
    console.log('hello from context');
  };

  const test = 12;

  return (
    <AppContext.Provider value={{ handleClick, test }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
