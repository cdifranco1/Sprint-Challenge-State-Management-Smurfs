import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'

import { ListGroup, ListGroupItem, Button, Container } from 'reactstrap';

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
    <Container className='p-2'>
      <h1>Smurfs</h1>
      <SmurfForm onChange={handleChange} onSubmit={onSubmit} newSmurf={newSmurf} />
      <ListGroup className="mt-4">
        <div className='d-flex justify-content-between'>
          <h4>Name</h4>
          <h4>Age</h4>
          <h4>Height</h4>
          <h4></h4>
        </div>
        {smurfs.map((smurf) =>         
          <ListGroupItem key={smurf.id} className="d-flex justify-content-between">
            <span>{smurf.name}</span>
            <span>{smurf.age}</span>
            <span>{smurf.height}</span>
            <Button onClick={() => {deleteSmurf(smurf)}}>Delete</Button>
          </ListGroupItem>
        )}
      </ListGroup>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getData, addSmurf, deleteSmurf })(App);
