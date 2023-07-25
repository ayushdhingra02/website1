import React, {useRef,useState} from 'react';
import axios from 'axios';
import {Form, Button, Card} from 'react-bootstrap';
// import { useAuth } from '../../context/AuthContext';
const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"
export default function CandidateReg() {
  var text=""
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // console.log(emailRef)
  const [error,setError]=useState();

  const [form, setForm]= useState({})

  const handleForm= (e) =>{
    // console.log(e.target.value, e.target.name)
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault( )
    await axios.post(`${BaseUrl}/candidateReg`,{form})
    .then(async function (response) {
      // handle success
      var _message = await response.data.Success;
      text="";
      text=JSON.stringify(_message)
      setError(text)
      console.log(response.data.Success);
      // console.log(response.data);
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    // console.log(form)
  } ;
  return (
    <>
      <Card>
        <p></p>
        <Card.Body>
          <h2 className='text-center mb-4'>Register as Candidate</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required name ="email" onChange={handleForm} />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='Password' ref={passwordRef} required name ="password" onChange={handleForm}/>
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required name ="confirm_password" onChange={handleForm} />
            </Form.Group>
            {error?<p>{error}</p>:null}  
            <Button className='w-100' type='submit'>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? Log In
      </div>
    </>
  )
}
