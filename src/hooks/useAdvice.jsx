import { useEffect, useState } from "react";

export const useAdvice = () => {
  const [state, setState] = useState({
    loading: true,
    advice: {},
  });

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setState({
          loading: false,
          advice: data,
        });
      });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  const handleClick = () => {
    setState({
      ...state,
      loading: true,
    });

    getAdvice();
  };

  return { ...state, handleClick };
};
