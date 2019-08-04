const initialState = {
  isEnMode: false,
};

const TOGGLE_EN = 'TOGGLE_EN';

export const toggleEnMode = isEnMode => ({ type: TOGGLE_EN, isEnMode });

export default (state = initialState, action) => {

  switch (action.type) {
  case TOGGLE_EN:
      return { ...state, isEnMode: action.isEnMode };
  default:
      return state;
  }
};