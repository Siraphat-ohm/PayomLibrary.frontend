import { useState } from "react"
import  navbarStyle from "../css/navbar.module.css"
import { Container, Nav, Navbar, Form, Button, NavDropdown } from "react-bootstrap";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoCart } from "react-icons/io5"
import { useCart } from "../context/CartContext";
import axios from "../config/baseAxios"
import useAuth from "../hooks/useAuth";

function NavBar() {
  const navigate = useNavigate();
  const { userName } = useAuth();
  const { cartQuantity, openCart } = useCart();

  const [ search, setSearch ] = useState<string>();
  const searchOpt = ['Author', 'ISBN', 'Keyword', 'name']

  const link:string[] = ['/home', '/list', '/history']

  function getNavAct(linkProps : any){
      let navClass = navbarStyle.navItem;
      if (linkProps.isActive) navClass += ` ${navbarStyle.navItemAct}`;
      return navClass;
  }
  function onLogout(){
      const handleLogout = async() => {
          await axios.get("/logout")
          navigate("/login")
      }
      handleLogout();
  }


    return (
    <>
      <Navbar style={{"backgroundColor": "#a9c25d"}} expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {link.map((item:string, index:number) => {
                return <NavLink key={index} className={getNavAct} style={{"paddingRight" : "10px"} } to={item}>{item.replace("/","")}</NavLink>
              })}
            </Nav>

          <Form className="d-flex" style={ { "marginRight" : "10px"}}>
            <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={search ? search : "search option"}
                  style={{"marginRight" : "10px", "paddingTop" : "6px", }}
                  menuVariant="dark">
                  {searchOpt.map((item:string,index:number) => {
                            return <NavDropdown.Item style={{}} key={index} onClick={e => setSearch(item)}>{item}</NavDropdown.Item>
                  })}
            </NavDropdown>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Navbar.Text><IoCart onClick={openCart} size="25px"/> {cartQuantity} - items | {userName}</Navbar.Text>
          </Navbar.Collapse>
          <Button style={ { "marginLeft" : '10px'}} onClick={onLogout}>Logout</Button>
        </Container>
      </Navbar>
      <Outlet/>
    </>
    )
}

export default NavBar;