import { Outlet } from "react-router-dom";

function About() {
  return(
    <>
    <button>회사 소개</button>
    <button>연혁</button>
    <button>오시는 길</button>

    <Outlet /> {/*하위 라우터들을 표시할 위치 설정 밑에다 두면 버튼 밑에
    위에 두면 버튼 위에 내용 표시*/}
    </>
  )
}

export default About;