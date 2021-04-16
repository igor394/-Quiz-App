import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {authorizations, registrations} from "../actions/user";
import {useDispatch} from "react-redux";

const Forma = (props) => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const  dispatch = useDispatch();


    return (
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="name" placeholder="Enter you name" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            {props.check ?
                <>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="primary" onClick={()=>registrations(name, pass, email)}>Registrations</Button>
                </> :
                <Button variant="primary" onClick={()=> dispatch(authorizations(name, pass))}>LogIn</Button>}
        </Form>
    );
};

export default Forma;