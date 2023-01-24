import { useState } from "react"
import  navbarStyle from "../../css/client/navbar.module.css"
import { Container, Nav, Navbar, Form, Button, NavDropdown } from "react-bootstrap";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from "../../config/baseAxios"
import useAuth from "../../hooks/useAuth";

function NavBarAdmin() {
  const navigate = useNavigate();
  const { userName } = useAuth();

  const [ search, setSearch ] = useState<string>();
  const searchOpt = ['Author', 'ISBN', 'Keyword', 'name']

  const link:string[] = ['/system/book-store', '/system/request', '/system/receipt', '/system/register-book']

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
      <Navbar style={{"backgroundColor": "#3989a2"}} expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {link.map((item:string, index:number) => {
                return <NavLink key={index} className={getNavAct} style={{"paddingRight" : "10px"} } to={item}>{item.replace("system/","").replace("/","")}</NavLink>
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
            <Navbar.Text>{userName}</Navbar.Text>
          </Navbar.Collapse>
          <Button style={ { "marginLeft" : '10px'}} onClick={onLogout}>Logout</Button>
        </Container>
      </Navbar>
      <Outlet/>
    </>
    )
}

export default NavBarAdmin;