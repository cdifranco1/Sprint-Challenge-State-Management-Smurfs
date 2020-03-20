import { GET_DATA } from '../actions/actions'
import { SET_DATA } from '../actions/actions'


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
    default:
      return state;
  }
}