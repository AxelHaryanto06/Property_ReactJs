import React, { Fragment, useState, useContext } from 'react'
import { Button, Form, Label, Input, Container, Row} from 'reactstrap';
import axios from 'axios'
import { AuthContext } from '../App';
import "./CSS/Register.css"
import { Link } from 'react-router-dom';

const qs = require('querystring')
const api = 'http://localhost:3002'

function RegisterComp() {

    const { dispatch } = useContext(AuthContext)

    const initialState = {
        username: "",
        email: "",
        nama_user: "",
        password: "",
        isSubmitting: false,
        response: null
    }

    const [data, setData] = useState(initialState)

    const handleRegisChange = event => {
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
            response: null
        })

        const requestBody = {
            username: data.username,
            email: data.email,
            nama_user: data.nama_user,
            password: data.password
        }

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post(api + '/api/v1/register', qs.stringify(requestBody), config)
            .then(res => {
                if (res.data.success === true) {
                    dispatch({
                        type: "SIGN UP",
                        payload: res.data
                    })
                }
                else {
                    setData({
                        ...data,
                        isSubmitting: false,
                        response: res.data.Message
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
                    <h1 className="signup">SIGN UP</h1>
                    <Form onSubmit={handleFormSubmit}>
                        <div>
                            <Label className="namauser-1">Nama Lengkap</Label>
                            <Input type="text" name="nama_user" id="NamaLengkap" value={data.nama_user} onChange={handleRegisChange} placeholder="Masukkan nama lengkap anda" />
                        </div>
                        <div>
                            <Label className="username-1">Username</Label>
                            <Input type="text" name="username" id="UsernameBox" value={data.username} onChange={handleRegisChange} placeholder="Masukkan username" />
                        </div>
                        <div>
                            <Label className="email-1">Email</Label>
                            <Input type="email" name="email" id="EmailBox" value={data.email} onChange={handleRegisChange} placeholder="Masukkan email" />
                        </div>
                        <div>
                            <Label className="password-1">Password</Label>
                            <Input type="password" name="password" id="PasswordBox" value={data.password} onChange={handleRegisChange} placeholder="Masukkan password" />
                        </div>

                        {data.response && (
                            <div className="alert alert-danger" id="salah_register" role="alert">
                                {data.response}
                            </div>

                        )}

                        <Button id="signup-button" disabled={data.isSubmitting}>
                            {data.isSubmitting ? (
                                "..Loading"
                            ) :
                                (
                                    "Sign Up"
                                )
                            }
                        </Button>
                    </Form>
                    <p className="login-link">Sudah punya akun ? <Link to="/">Silakan Login</Link></p>
                </Row>
            </Container>
        </Fragment>
    );
}

export default RegisterComp