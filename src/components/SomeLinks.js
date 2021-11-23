import React from 'react';

export default function SomeLinks() {
  return (
    <>
      <h3>Alguns Links</h3>
      <p>Links interessantes.</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">OAP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">OAB</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Defensoria</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Blog</a>
        </li>
      </ul>
      <hr className="d-sm-none"></hr>
    </>
  )

}