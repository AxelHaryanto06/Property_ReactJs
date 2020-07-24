import React, { Fragment, useContext, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, CardImg } from 'reactstrap';

import axios from 'axios'
import { AuthContext } from '../App'
import { Link } from 'react-router-dom';
import "./CSS/Login.css"

const qs = require('querystring')
const api = 'http://localhost:3002'

function LoginComponent() {

    const { dispatch } = useContext(AuthContext)

    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    }

    const [data, setData] = useState(initialState)

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })

        const requestBody = {
            email: data.email,
            password: data.password
        }

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post(api + '/api/v1/login', qs.stringify(requestBody), config)
            .then(res => {
                if (res.data.success === true) {
                    dispatch({
                        type: "LOGIN",
                        payload: res.data
                    })
                }
                else {
                    setData({
                        ...data,
                        isSubmitting: false,
                        errorMessage: res.data.Message
                    })
                }

                throw res
            })
    }

    return (
        <Fragment>
            <Container>
                <br />
                <Row>
                    <div className="picture">
                        <img className="picture1" src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80" alt="" />
                    </div>
                    <h1 className="login">LOGIN</h1>
                    <Form onSubmit={handleFormSubmit}>
                        <div className="input-login">
                            <div className="input-email">
                                <Label className="email">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Masukkan Email" value={data.email} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div>
                            <Label className="password">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Masukkan Password" value={data.password} onChange={handleInputChange} />
                        </div>

                        {data.errorMessage && (
                            <div className="alert alert-danger" id="salah_password" role="alert">
                                {data.errorMessage}
                            </div>
                        )}

                        <Button id="login-button" disabled={data.isSubmitting}>
                            {data.isSubmitting ? (
                                "..Loading"
                            ) :
                                (
                                    "Login"
                                )
                            }
                        </Button>
                    </Form>
                    <p className="register-link">Belum punya akun ? <Link to="/register">Register Sekarang</Link></p>
                </Row>
            </Container>
        </Fragment>
    )
}

export default LoginComponent
