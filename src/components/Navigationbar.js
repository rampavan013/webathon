import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigationbar() {
    const activeLink={
        color:"red",
        fontSize:"130%"  
      };
      const inactiveLink={
        color:'black',
        fontSize:"120%" 
      };
      
    return(
        <div className=''>
            <Navbar bg="" variant="" className=''>
            <div className='container '>
                <Navbar.Brand href="#home"><img src='https://i.etsystatic.com/9917841/r/il/83c4b0/906026129/il_570xN.906026129_2y2a.jpg' 
                className='rounded-3' width={90}/></Navbar.Brand>
                <Nav className="me-0 d-flex align-items-center">
                    <NavLink to="/" className='nav-link' style={({isActive})=>{return isActive?activeLink:inactiveLink}}>Home</NavLink>
                    <NavLink to='/login' className='ms-3'><Button className='btn btn-danger rounded-3 opacity-100'>Login As Member</Button></NavLink>
                </Nav>
            </div>
            </Navbar>
        </div>
    )
}

export default Navigationbar