const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        MySites: [...state.MySites, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        MySites: state.MySites.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.food.find((item) => item.id === Number(action.payload))
        || state.coffee.find((item) => item.id === Number(action.payload))
        || [],
      };
    case 'SET_SETSEARCH':
      return {
        ...state,
        playing: state.food.find((item) => item.id === Number(action.payload))
        || state.coffee.find((item) => item.id === Number(action.payload))
        || [],
      };
    case 'GET_ALL_SITES':
      return {
        ...state,
        food: state.food,
      };
    default:
      return state;
  }
};

export default reducer;
