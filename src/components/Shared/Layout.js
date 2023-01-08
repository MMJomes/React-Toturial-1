import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';



function Layout(props) {
  return (
    <>
      <Navbar variant="dark" bg="success">
        <Navbar.Brand>CRUD</Navbar.Brand>
      </Navbar>
      <Container>{props.children}</Container>
    </>
  );
}
export default Layout;
