import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap"
import ChangePass from './ChangePassword';
import Logout from "./Logout";

const Header = () => {
    return <>

        <Navbar bg="danger" variant="dark" expand="lg" >
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <NavDropdown className="fs-5" title="Nguyen"  id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                <ChangePass></ChangePass>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" >
                                <Logout></Logout>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>

}

export default Header;
