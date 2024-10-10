import React from 'react';

function Header({ title, style }) {
  return (
    <header>
      <h1 style={style}>{title}</h1>
    </header>
  );
}

export default Header;
