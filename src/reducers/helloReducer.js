export default (state = { text: '' }, action) => {
  if (action.type === 'SAY_HELLO') {
    return { ...state, text: 'Hello from Redux!!' };
  }
  return state;
};
