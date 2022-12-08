import { useEffect, useState } from "react";
import { getAdvice } from "../helpers/getAdvice";

export const useAdvice = () => {
  const [state, setState] = useState({
    loading: true,
    canSearch: true,
    advice: {},
  });

  useEffect(() => {
    getAdvice(setState);
  }, []);

  const handleClick = () => {
    setState({
      ...state,
      loading: true,
    });

    getAdvice(setState);
  };

  return { ...state, handleClick };
};
