import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Container, Col, Row, FormGroup, Alert, Label, Input, Button, Form } from 'reactstrap'

const api = "http://localhost:3002"

class EditComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_property: this.props.location.state.id_property,
            nama: this.props.location.state.nama,
            type: this.props.location.state.type,
            harga: this.props.location.state.harga,
            lokasi: this.props.location.state.lokasi,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahProperty = (idproperty) => {
        const data = qs.stringify({
            id_property: idproperty,
            nama: this.state.nama,
            type: this.state.type,
            harga: this.state.harga,
            lokasi: this.state.lokasi
        });

        axios.put(api + '/ubah', data)
            .then(json => {
                if (json === 200) {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
                else {
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
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>Nama</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukkan nama anda" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Type</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="type" value={this.state.type} onChange={this.handleChange} placeholder="Masukkan Type Property" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Harga</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukkan Harga Property" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Lokasi</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="lokasi" value={this.state.lokasi} onChange={this.handleChange} placeholder="Masukkan Lokasi Property" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={() => this.ubahProperty(this.state.id_property)}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}

export default EditComp
