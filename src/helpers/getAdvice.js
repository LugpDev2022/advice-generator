export const getAdvice = (setState) => {
  fetch("https://api.adviceslip.com/advice")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      setState((prevState) => {
        return {
          ...prevState,
          loading: false,
          advice: data,
        };
      });
    });
};
