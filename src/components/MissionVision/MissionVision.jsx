import React from "react";
import "./MissionVision.css";
import logovisual from '../../assets/logos/alas-D.png'

export default function MissionVision() {
  return (
    <section className="mv-container">
      <h1 className="mv-title">VisualPlusGo</h1>

            <img src={logovisual} alt="MiMarca" className="logo-img" />
      <p className="mv-intro">Somos una empresa Lojana fundada enel año 2008, creadores de Software de
última tecnología, nuestra actividad gira alrededor de sistemas de gestión
comercial, implementando soluciones informáticas para pequeñas, medianas y
grandes empresas del Ecuador. Brindamos sistemas de gestión comercial, ventas
móviles, facturación electrónica e inteligencia de negocios </p>

      <div className="mv-grid">
        <div className="mv-card">
          <h2 className="mv-card-title">Misión</h2>
          <p>Cada empresa del país pueda controlar su actividad de gestión comercial con los
recursos económicos, humanos y financieros que dispone con un alto índice
de calidad apoyados en nuestros sistemas.</p>
        </div>

        <div className="mv-card">
          <h2 className="mv-card-title">Visión</h2>
          <p>Dar soluciones informáticas de alta calidad y a precios convenientes a la mayoría de
empresas del país,a través de la implementación del sistema VisualPlus yde
soluciones WEB.</p>
        </div>
      </div>
    </section>
  );
}
