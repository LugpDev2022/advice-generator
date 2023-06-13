import { useEffect, useState } from 'react';

export const useAdvice = () => {
  const [state, setState] = useState({
    loading: true,
    canSearch: false,
    advice: {},
  });

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice', { cache: 'no-store' })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setState({
          loading: false,
          canSearch: false,
          advice: data,
        });

        setTimeout(() => {
          setState((prevState) => {
            return {
              ...prevState,
              canSearch: true,
            };
          });
        }, 2500);
      });
  }, []);

  const handleClick = () => {
    setState({
      ...state,
      loading: true,
    });

    fetch('https://api.adviceslip.com/advice', { cache: 'no-store' })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setState({
          loading: false,
          canSearch: false,
          advice: data,
        });

        setTimeout(() => {
          setState((prevState) => {
            return {
              ...prevState,
              canSearch: true,
            };
          });
        }, 2500);
      });
  };

  return { ...state, handleClick };
};
