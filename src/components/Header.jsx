import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return(
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate(-1)}>뒤로가기</Nav.Link>
            <Nav.Link href="#features">3번</Nav.Link>
            <Nav.Link href="/test">테스트</Nav.Link>
            <Link to="/test">테스트2</Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
export default Header