import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import "./App.css";
import { getData, addSmurf } from '../actions/actions'
import { SmurfForm } from "./SmurfForm";


function App(props) {
  const [ newSmurf, setNewSmurf ] = useState({
    name: '',
    age: 0, 
    height: '',
  })

  useEffect(() => {
    props.getData()
  }, [])

  const handleChange = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name] : e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    props.addSmurf(newSmurf)
  }


  return (
    <div className="App">
      <h1>Smurfs</h1>
      <SmurfForm onChange={handleChange} onSubmit={onSubmit} />
      {props.smurfs.map((smurf) => 
        <div style={{margin: '1% 0'}}>
          <span style={{display: 'inline-block', width: '10%'}}>{smurf.name}</span>
          <span style={{display: 'inline-block', width: '10%'}}>{smurf.age}</span>
          <span style={{display: 'inline-block', width: '10%'}}>{smurf.height}</span>
          <button>Delete</button>
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

export default connect(mapStateToProps, { getData, addSmurf })(App);
