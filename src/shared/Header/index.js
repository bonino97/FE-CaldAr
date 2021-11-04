import React from 'react';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
      <div className='container'>
        <h1>CALDAR</h1>
      </div>

      <button className='btn btn-danger nuevo-post d-block d-md-inline-block'>
        Agregar Edificio &#43;
      </button>
    </nav>
  );
};

export default Header;
