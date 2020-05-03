import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
];

function usePersistedState<T>(key: string, initialState: any):Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if(storageValue) {
      return(storageValue === 'light' ? light : dark);
    }else{
      return initialState;
    }

  });

  useEffect(() => {
    localStorage.setItem(key, state.title);
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
