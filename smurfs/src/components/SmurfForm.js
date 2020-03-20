
import React from 'react';


export const SmurfForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <label name='name'>Name: </label>
      <input type="text" name="name" value={props.newSmurf.name} onChange={props.onChange}/>

      <label name="age">Age: </label>
      <input type="text" name="age" value={props.newSmurf.age} onChange={props.onChange}/>

      <label name="height">Height: </label>
      <input type="text" name="height" value={props.newSmurf.height} onChange={props.onChange}/>

      <button type="submit">Add Smurf</button>
    </form>
  )
}