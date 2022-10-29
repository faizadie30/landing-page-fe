import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      className="border-bottom header-content"
    >
      <Container className="text-lg container-navbar">
        <Navbar.Brand href="#home">
          <ImgBootstrap src="/image/logo-sahaware.svg" width={90} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handlerUpdateToggleMenu}
        >
          {activeToggleMenu && <RiCloseFill />}
          {!activeToggleMenu && <RiMenu5Line />}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="active" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#article">Article</Nav.Link>
            <Nav.Link href="#create-article">Create</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-info" href="#login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;
