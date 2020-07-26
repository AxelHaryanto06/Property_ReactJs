import React, { Component } from 'react'
import { Container, Alert, Form, Label, FormGroup, Row, Col, Input, Button } from 'reactstrap'
import axios from 'axios'

const api = 'http://localhost:3002'

class TambahComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            nama: '',
            type: '',
            harga: '',
            lokasi: '',
            display: 'none'
        }
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    Addproperty = () => {
        axios.post(api + '/tambah', {
            nama: this.state.nama,
            type: this.state.type,
            harga: this.state.harga,
            lokasi: this.state.lokasi
        }).then(json => {
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4>Form Tambah Property</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>Nama</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukkan Nama Property"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Type</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="type" value={this.state.type} onChange={this.handleChange} placeholder="Masukkan Type"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Harga</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukkan Harga Propety"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Lokasi</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="lokasi" value={this.state.lokasi} onChange={this.handleChange} placeholder="Masukkan Lokasi Property"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={this.Addproperty}>Submit</Button>            
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}

export default TambahComp
