import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex w-full h-[150px] border-b bg-blue-50 relative text-lg">
      <h1 className="m-auto text-4xl font-nanum-eb">
        <Link to="/">스터디 블로그</Link>
      </h1>
      <ul className="flex absolute bottom-0 right-8">
        <li className="p-4">
          <Link to="/schedule">일정</Link>
        </li>
        <li className="p-4">
          <Link to="/sign">회원가입/로그인</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
