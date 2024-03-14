import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Navbar className="red-color" data-bs-theme="dark">
        <Container className="p-0">
          <Nav className="justify-content-end">
            <NavLink
              to="/"
              className={({isActive, isPending}) =>
                isActive && !isPending ? "nav-link active" : "nav-link"
              }
            ><i className="fa-solid fa-house"></i>
              Home
            </NavLink>
            <NavLink
              to="/Contacto"
              className={({isActive, isPending}) =>
                isActive && !isPending ? "nav-link active" : "nav-link"
              }
            ><i className="fa-solid fa-address-card"></i>
              Contacto
            </NavLink>
          </Nav>
          <NavLink to="/" className="navbar-brand">
          <i className="fa-solid fa-cake-candles"></i> Happy Cake
          </NavLink>
        </Container>
      </Navbar>
    </>
);
};