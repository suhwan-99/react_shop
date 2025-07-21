import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  // 예전 문법
  // const 변수이름 = useQuery(['쿼리이름'], () =>{
  // axios로 요청
  // 쿼리에 저장할 데이터를 return
  // })

    // 요즘 문법
    // const 변수이름2 = useQuery({
    //   queryKey: ['쿼리이름'],
    //   queryFn:() => {
    //     axios로 요청
    //     쿼리에 저장할 데이터를 return
    //   }
    // })
    const userInfoQuery = useQuery({
      queryKey: ['userInfo'],
      queryFn: async () => {
        const response = await axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/useinfo.json')
        return response.data;
      },
      staleTime: 3000,
      retry: 2
    })
  return(
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate(-1)}>뒤로가기</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')}>장바구니</Nav.Link>
            <Nav.Link href="/test">테스트</Nav.Link>
            <Link to="/test">테스트2</Link>
          </Nav>
          <Nav style={{color: 'white', fontSize:'20px'}}>
            {userInfoQuery.isLoading && '회원정보 불러오는 중...'}
            {userInfoQuery.error && '회원정보 불러오기 실패'}
            {userInfoQuery.data && userInfoQuery.data[0].name}
          </Nav>
        </Container>
      </Navbar>
  )
}
export default Header