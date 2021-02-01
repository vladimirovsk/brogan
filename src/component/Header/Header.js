import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './Header.css'
import {NavLink} from 'react-router-dom';
import logo from '../../img/brogan-logo-top.png'



function Header(){


  return(
    <React.Fragment>
      <Navbar collapseOnSelect sticky="top"  expand="lg" fixed='top' variant='dark'>
      <Navbar.Brand href="#home" style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: '50',
          color: 'red'
        }}>
         
          <img src={logo} height='50' alt='logo' />  
          BROGAN

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id='responsive-navbar-nav'>
          {/* <Nav className="mr-auto" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}> */}
          <Nav className="mr-auto" activeKey="/home">
            <Nav.Link as='div' href='/'><NavLink exact to="/"       className='linkMenu' activeClassName="selected">HOME</NavLink></Nav.Link>
            <Nav.Link as='div' href='/'><NavLink exact to="/firma"  className='linkMenu' activeClassName="selected">FIRMA</NavLink></Nav.Link>
            <Nav.Link as='div' href='/'><NavLink exact to="/oferta" className='linkMenu' activeClassName="selected">OFERTA</NavLink></Nav.Link>

            <NavDropdown title="REALIZACJE" id="basic-nav-dropdown" >
                <NavDropdown.Item as='div' href='/'><Nav.Link as='div' href='/'><NavLink exact to='/project1' className='linkMenu' activeClassName="selected">PROJECT NAME 1</NavLink></Nav.Link></NavDropdown.Item>
                <NavDropdown.Item as='div' href='/'><Nav.Link as='div' href='/'><NavLink exact to='/project2' className='linkMenu' activeClassName="selected">PROJECT NAME 2</NavLink></Nav.Link></NavDropdown.Item>
                <NavDropdown.Item as='div' href='/'><Nav.Link as='div' href='/'><NavLink exact to='/project3' className='linkMenu' activeClassName="selected">PROJECT NAME 3</NavLink></Nav.Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as='div' href='/'><Nav.Link as='div'><NavLink exact to='/project3' className='linkMenu' activeClassName="selected">PLANING PROJECT</NavLink></Nav.Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as='div' href='/'><NavLink to="/galeria" className='linkMenu'>GALERIA</NavLink></Nav.Link>
            <Nav.Link as='div' href='/'><NavLink to="/contact" className='linkMenu'>KONTACT</NavLink></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
    </React.Fragment>  
  )

}

export default Header;