import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <div>
      <Navbar className="bg-dark navbar-dark">
        <Container>
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faLocationDot} style={{ color: "grey" }} />
          </Navbar.Brand>
          <div className="justify-content-end">
            <NavLink
              style={{ paddingRight: "30px" }}
              className={setActiveClass}
              to="/"
            >
              Home
            </NavLink>
            <NavLink className={setActiveClass} to="/pokemones">
              Pokemones
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
