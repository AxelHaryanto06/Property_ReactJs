import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Container, Table, Button, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom';
const api = 'http://localhost:3002'

class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
            property: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                property: res.data.values
            })
        })
    }

    Deleteproperty = (idproperty) => {
        const { property } = this.state
        const data = qs.stringify({
            id_property: idproperty
        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    property: property.filter(property => property.id_property !== idproperty),
                    display: 'block'
                })
                this.props.history.push('/property')
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
                <h2>Property Lists</h2>
                <Link to="/property/tambah"><Button color="success">Tambah Property</Button></Link>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Type</th>
                            <th>Harga</th>
                            <th>Lokasi</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.property.map(property =>
                            <tr key={property.id_property}>
                                <td>{property.nama}</td>
                                <td>{property.type}</td>
                                <td>{property.harga}</td>
                                <td>{property.lokasi}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: `/property/edit`,
                                                state: {
                                                    id_property: property.id_property,
                                                    nama: property.nama,
                                                    type: property.type,
                                                    harga: property.harga,
                                                    lokasi: property.lokasi
                                                }
                                            }
                                        }>
                                        <Button>Edit</Button>
                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deleteproperty(property.id_property)} color="danger">Hapus</Button>
                                </td>
                            </tr>

                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Services
