import React, {useState} from 'react'
import { Container, Form, Button, Col } from 'react-bootstrap'
import axios from 'axios'

function EmailForm() {
    const [firstName, setFirstName] = useState(''),
    [lastName, setLastName] = useState(''),
    [email, setEmail] = useState(''),
    [message, setMessage] = useState('');

    const sendEmail = () =>{
        if(firstName===''||lastName===''||email===''||message===''){
            alert('Please complete all the required fields')
        }
        else{
            axios.post('/api/email', {firstName, lastName, email, message})
            .then(()=>{
                alert('Email sent successfully.')
                setFirstName('')
                setLastName('')
                setEmail('')
                setMessage('')
            }
            )
            .catch(err=>console.log(err))
        }
    }

    return (
        <div>
            <Container>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First Name" onChange={e => {setFirstName(e.target.value)}} value={firstName} type='text'/>
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last Name" onChange={e => {setLastName(e.target.value)}} value={lastName} type='text'/>
                        </Col>
                    </Form.Row>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter Email' onChange={e => {setEmail(e.target.value)}} value={email}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as='textarea' rows='5' type='text' placeholder='Reason for contacting' onChange={e => {setMessage(e.target.value)}} value={message}/>
                    </Form.Group>
                    <Form.Group>
                        <Button onClick={()=>sendEmail()}>Send</Button>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default EmailForm
