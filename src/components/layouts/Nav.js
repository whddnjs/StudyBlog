import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="h-full w-[15%] bg-blue-200">
      <ul>
        <li className="p-2">
          <Link to="/study">공부</Link>
        </li>
        <li className="p-2">
          <Link to="/project">프로젝트</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
