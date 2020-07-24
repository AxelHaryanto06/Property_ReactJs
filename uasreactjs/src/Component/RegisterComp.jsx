import React, { Fragment, PureComponent } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Alert } from 'reactstrap';
import axios from 'axios'
const api = 'http://localhost:3002'

export default class RegisterComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            nama_user: '',
            password: '',            
            response: '',
            color: '',
            display:'none'
        }
    }

    handleRegisChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    register = () => {
        axios.post(api+'/api/v1/register',{
            username: this.state.username,
            email: this.state.email,
            nama_user: this.state.nama_user,
            password: this.state.password,

        }).then(json => {
            if(json.data.status === 200){
                if(json.data.values === 'Berhasil Membuat User'){
                    this.setState({
                        response: json.data.values,
                        color:'success',
                        display: 'block',
                    })
                }
                else if(json.data.values === 'Username sudah terdaftar!'){
                    this.setState({
                        response: json.data.values,
                        color:'danger',
                        display: 'block'
                    })
                }
            }else{
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
        this.setState({username:''})
        this.setState({email:''})
        this.setState({nama_user:''})
        this.setState({password:''})
        
    }

    render() {
        return (
            <Container>
                <Alert color={this.state.color} style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Label for="username">Username</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="username" id="UsernameBox" value={this.state.username} onChange={this.handleRegisChange} placeholder="Masukkan username" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label for="email">Email</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="email" name="email" id="EmailBox" value={this.state.email} onChange={this.handleRegisChange} placeholder="Masukkan email" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label for="nama_user">Nama Lengkap</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="nama_user" id="NamaLengkap" value={this.state.nama_user} onChange={this.handleRegisChange} placeholder="Masukkan nama lengkap anda" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label for="password">Password</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="password" name="password" id="PasswordBox" value={this.state.password} onChange={this.handleRegisChange} placeholder="Masukkan password" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <Button onClick={this.register}>SIGN UP</Button>
                </Form>
            </Container>
        );
    }
}