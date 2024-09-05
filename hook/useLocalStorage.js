import { useState, useEffect } from 'react'


function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error("Erro ao acessar localStorage:", error);
        return initialValue;
      }
    });

    //atualizar o localStorage quando o valor mudar
    useEffect(() => {
        try {
          window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
          console.error("Erro ao salvar no localStorage:", error);
        }
      }, [key, storedValue]);
    
      return [storedValue, setStoredValue];
    }
    
    export default useLocalStorage;