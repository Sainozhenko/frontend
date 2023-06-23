import React from 'react'
import HeaderCart from './HeaderCart';
import Logo from './Logo'
import Search from './Search';

const Header:React.FC = () => {
  return (
  <header>
    <div>
        <Logo/>
        <HeaderCart/>
    </div>
    <Search/>
  </header>
  
  );
};

export default Header;
