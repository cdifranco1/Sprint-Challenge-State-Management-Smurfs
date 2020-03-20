import { GET_DATA, SET_DATA, DELETE_SMURF } from '../actions/actions'

const initialState = 
  {
    smurfs: [
      {
        name: 'Brainey',
        age: 0,
        height: '',
        id: 0
      }
    ]
  }

export const smurfReducer = (state = initialState, action) => {
  console.log(state)
  switch(action.type){
    case GET_DATA:
      return {
        ...state, 
        smurfs: action.payload
      }
    case SET_DATA:
      return {
        ...state, 
        smurfs: action.payload
      }
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter((smurf) => smurf.id !== action.payload.id)
      }
    default:
      return state;
  }
}