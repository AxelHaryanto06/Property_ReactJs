import React, { useState, useContext } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { AuthContext } from '../App';
import "./CSS/Menu.css"
import { Link } from 'react-router-dom';

const MenuComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const { state, dispatch } = useContext(AuthContext)

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">KuyProperty</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/" className="navlink">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="navlink">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/property" className="navlink">Services</Link>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                    {state.isAuthenticated && (
                        <Button onClick={() => dispatch({
                            type: "LOGOUT"
                        })}>
                        LOGOUT     
                        </Button>                                
                            )}
                        
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
        // <div>
        //     <Navbar className="navbar-dark bg-dark" expand="md">
        //         <NavbarBrand to="/">KuyProperty</NavbarBrand>
        //         <NavbarToggler onClick={toggle} />
        //         <Collapse isOpen={isOpen} navbar>
        //             <Nav className="mr-auto" navbar>
        //                 <NavItem>
        //                     <NavLink to="/" className="nav-link">Home</NavLink>
        //                 </NavItem>
        //                 <NavItem>
        //                     <NavLink to="/property" className="nav-link">Services</NavLink>
        //                 </NavItem>
        //             </Nav>

        //         </Collapse>
        //     </Navbar>
        // </div>
    )
}

export default MenuComp
