const sayHello = () => ({ type: 'SAY_HELLO' });

export const sayHelloThunk = () => dispatch => {
  setTimeout(() => {
    dispatch(sayHello());
  }, 1500);
};
