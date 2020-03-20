import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import "./App.css";
import { getData, addSmurf, deleteSmurf } from '../actions/actions'
import { SmurfForm } from "./SmurfForm";


const smurfFormState = {
  name: '',
  age: '', 
  height: '',
}

function App({smurfs, getData, addSmurf, deleteSmurf}) {
  const [ newSmurf, setNewSmurf ] = useState(smurfFormState)

  useEffect(getData, [])

  const handleChange = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name] : e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addSmurf(newSmurf)
    setNewSmurf(smurfFormState)
  }

  return (
    <div className="App">
      <h1>Smurfs</h1>
      <SmurfForm onChange={handleChange} onSubmit={onSubmit} newSmurf={newSmurf} />
      {smurfs.map((smurf) => 
        <div style={{margin: '1% 0'}}>
          <span style={{display: 'inline-block', width: '10%'}}>{smurf.name}</span>
          <span style={{display: 'inline-block', width: '10%'}}>{smurf.age}</span>
          <span style={{display: 'inline-block', width: '10%'}}>{smurf.height}</span>
          <button onClick={() => {deleteSmurf(smurf)}}>Delete</button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getData, addSmurf, deleteSmurf })(App);
