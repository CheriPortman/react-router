import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/red">  RED  </Link>
        <Link to="/blue">  BLUE  </Link>
        <Link to="/yellow"> YELLOW </Link>
      </nav>
    </header>
  );
}
