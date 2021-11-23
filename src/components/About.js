import React from 'react';
import SomeLinks from './SomeLinks';
import thiago from '../images/thiago-its-me.jpeg';

export default function About() {
  return (
    <div className="col-sm-4">
      <h2  className="text-center">Thiago de Azevedo Ribeiro</h2>
      <h5 className="text-center">OAB/RJ 15318449 e OAP 62818L</h5>
      <img className="fakeimg mx-auto d-block" src={thiago} alt="foto perfil" />
      <p>O Thiago Azevedo é advogado autónomo, graduado em Direito em 2019. Pós graduado em M&A e Corporate Litigation, pela Faculdade de Direito de Lisboa, especialização em Marcas e Patentes, Propriedade Intelectual e Direitos Autorais.
      Atua nos mais diversos ramos do direito, especialmente em direito empresarial e internacional com ênfase na imigração entre Brasil e Portugal.</p>
      <SomeLinks />
    </div>
  )
}
