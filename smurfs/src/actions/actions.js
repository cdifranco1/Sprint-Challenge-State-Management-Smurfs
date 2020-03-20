import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const SET_DATA = 'SET_DATA';
export const DELETE_SMURF = 'DELETE_SMURF';


export const getData = () => dispatch => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({type: GET_DATA, payload: res.data})
  })  
}

export const addSmurf = (newSmurf) => dispatch => {
  console.log(newSmurf)
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      dispatch({type: SET_DATA, payload: res.data})
    })
}

export const deleteSmurf = (smurf) => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => {console.log(res)})
  dispatch({type: DELETE_SMURF, payload: smurf})
}
