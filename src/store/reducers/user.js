const INITIAL_STATE = {}

export default function user(state = INITIAL_STATE, action) {
  if (action.type === 'LOAD_USER') {
    return { user: action.response.data }

  }
  
  return state;
}