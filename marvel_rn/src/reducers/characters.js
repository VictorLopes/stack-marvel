const INITIAL_STATE = {
  chars: [],
  modal: {
    opened: false,
    character: {}
  },
  page: 0
}

export default characters = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'GET_CHARACTERS_TRIGGER':
      return state
    case 'SET_CHARACTERS':
      return { ...state, chars: [...state.chars, ...action.payload]}
    case 'SET_MODAL_OPENED':
      return {...state, modal: action.payload}
  }
  return state;
};