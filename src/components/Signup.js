import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {db} from "../firebase"
// import { auth } from "../firebase"
import firebase from "firebase"

export default function Signup() {
  
  const emailRef = useRef()
  const passwordRef = useRef()
  const name=useRef()
  const Phone=useRef()
  // const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
       await firebase.auth().createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      // console.log(firebase.auth)
      .then((userCredential) => {
    // Signed in 
    // var user = userCredential.user;
    // console.log(user);
    

      db.collection("custumers")
       .add({
         Email:emailRef.current.value,
         name:name.current.value,
         PhoneNo:Phone.current.value
        
      })
    })
      // console.log(name)
      history.push("/")
    } catch {
      // console.log(error)
      setError("Failed to create an account")
    }
    emailRef.current.value=""
    passwordRef.current.value=""
    name.current.value=""
    Phone.current.value=""
    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={name} required
              placeholder="Name" />
            </Form.Group>

            <Form.Group id="Phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" 
              // pattern="[+]{1}[0-9]{11,14}" 
              ref={Phone} required 
              placeholder="Phone Number"/>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
              
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
               
            </Button>
            
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}
