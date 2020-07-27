import React, { useContext } from 'react'
import { Jumbotron } from 'reactstrap';
import { AuthContext } from '../App';
import { Link } from 'react-router-dom';
import './CSS/Home.css'

function HomeComp() {
    const { state, dispatch } = useContext(AuthContext)
    return (
        <div>
            <div className="home">
                <div className="display1">
                    <h1 >Hello, {state.user}</h1>
                    <h2>Selamat Datang di Website KuyProperty</h2>
                </div>
                <p className="display2">Sudah punya akun ? <Link className="linkto" to="/login">Login</Link></p>
            </div>

            <div>
                <div className="building"></div>
            </div>
        </div>
    )
}

export default HomeComp
