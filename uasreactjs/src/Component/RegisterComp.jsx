import React, { Fragment, PureComponent } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, CardImg, Alert } from 'reactstrap';
import axios from 'axios'
const api = 'http://localhost:3002'

export default class RegisterComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            //status:'2',
            response: '',
            color:'',
            display:'none'
        }
    }

    handleRegisChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    register = () => {
        axios.post(api+'/api/v1/register',{
            username: this.state.username,
            password: this.state.password
            //status: this.state.status
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
        this.setState({password:''})
    }

    render() {
        return (
            <Container>
                <Alert color={this.state.color} style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Label for="Username">Username</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="username" id="UsernameField" value={this.state.username} onChange={this.handleRegisChange} placeholder="Masukan username" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label for="Password">Password</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="password" name="password" id="PasswordField" value={this.state.password} onChange={this.handleRegisChange} placeholder="Masukan password" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <Button onClick={this.register}>SIGN UP</Button>
                </Form>
            </Container>
        );
    }
}