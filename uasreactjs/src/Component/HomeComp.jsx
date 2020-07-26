import React, { useContext } from 'react'
import { Jumbotron } from 'reactstrap';
import { AuthContext } from '../App';
import { Link } from 'react-router-dom';

function HomeComp() {
    const {state, dispatch} = useContext(AuthContext)
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Hello, {state.user}</h1>
                <h2>Selamat Datang di Website KuyProperty</h2>
                <p>Sudah punya akun ? <Link to="/login">Login</Link></p>               
            </Jumbotron>            
        </div>
    )
}

export default HomeComp
