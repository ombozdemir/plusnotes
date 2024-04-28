import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar bg="dark">
      <Navbar.Brand href="#home" className="p-3">
        PlusNotes
      </Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="#link1">Notes</Nav.Link>
        <Nav.Link href="#link2">Create Note</Nav.Link>
        <Nav.Link href="#link3">{new Date().toLocaleString()}</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MyNavbar;
