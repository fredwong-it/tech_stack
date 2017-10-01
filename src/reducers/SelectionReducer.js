export default (state = null, action) => {
  console.log(action);

  switch (action.type) {
    case 'select-library':
      return action.payload;
    default:
      return state;
  }
};
