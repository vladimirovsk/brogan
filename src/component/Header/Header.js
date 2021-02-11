import React, {useState}  from 'react';
import {Navbar, Nav, NavDropdown, Form} from 'react-bootstrap';
import './Header.css'

import {NavLink} from 'react-router-dom';
import logo from '../../img/brogan-logo-top.png'
import { makeStyles} from "@material-ui/core/styles";
import {Button,  Menu, MenuItem, } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import {translate ,getLanguage, setLanguage } from 'react-switch-lang';


const useStyles = makeStyles((theme) => ({
  buttonLng:{
    //...theme.typography.button,
    outline: 'none',
    // width:'5em',
    // height:"28px",
  },
  menu: {
    backgroundColor: theme.palette.common.primary,
    color  : theme.typography.caption,//"black",
    borderRadius:'0px',
    //"&:hover":{
    //color:"black",
    // },
   },
 
   menuItem:{
     color  : theme.typography.caption,
    //...theme.typography.tab,
    opacity: 1,
    borderRadius:'0px',
   },
 
  }));

function Header(props){
  const classes = useStyles();
  const [{t}] = useState(props);
  const [anchorEl2, setAnchorEl2] =  useState(null)
  const [openMenu, setOpenMenu] = useState(false)

  const handleClickLng = (event) => {
    setOpenMenu(true)
    setAnchorEl2(event.currentTarget);
  }

  const handleCloseLng = (event) => {
    setOpenMenu(false)
    setAnchorEl2(null)
}

const handleChangeLg = (event, lng) => {
  setLanguage(lng);
  setAnchorEl2(null)
  setOpenMenu(false)
};

const lngButton = (
  <React.Fragment>
    <Button 

      // display = 'inline-block'
      border = {0}
      hidden = {false}
      variant="contained"
      color="secondary"
      className={classes.buttonLng}
      onClick={handleClickLng}
      endIcon={<ArrowDropDownIcon/>}
      style={{ outline: '0', outlineOffset: '0'}}
    >
      {getLanguage()}
    </Button>

    <Menu
      id="simple-menu-lng"
      anchorEl={anchorEl2}
      keepMounted
      open={openMenu}//{Boolean(anchorEl2)}
      onClose={handleCloseLng}
      classes={{paper: classes.menu}}
      style={{zIndex: 5402 }}
      MenuListProps={{
        onMouseLeave: handleCloseLng
      }}
  >
          <MenuItem onClick={(event) => {handleChangeLg(event, 'pl'); setOpenMenu(false)}} className={classes.menuItem}  >PL</MenuItem>
          <MenuItem onClick={(event) => {handleChangeLg(event, 'en'); setOpenMenu(false)}} className={classes.menuItem}  >EN</MenuItem>
    </Menu>	
  </React.Fragment>
)



  return(
    <React.Fragment>
      {/* <Navbar collapseOnSelect position="top"  expand="lg" fixed='top' variant='dark'> */}
      <Navbar collapseOnSelect position="top"  expand="lg" sticky='top' variant='dark'>
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
          <Nav>
        <Form inline>
        {lngButton}
           {/* <IOSSwitch   
            checked={darkMode} 
            onChange={handleClickNight} 
            name="Night" />             */}
          </Form>
          
      </Nav>
          </Navbar.Collapse>
        </Navbar>
    </React.Fragment>  
  )

}

export default translate(Header);