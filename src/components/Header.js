import React from 'react';

export default function Header () {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <a className="navbar-brand" href="#">Thiago Azevedo</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Sobre</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Seriços</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contate-me</a>
        </li>    
      </ul>
    </div>  
  </nav>
  )
};
