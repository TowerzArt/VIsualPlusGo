import React from "react";
import "./MissionVision.css";

export default function MissionVision() {
  return (
    <section className="mv-container">
      <h1 className="mv-title">VisualPlusGo</h1>
      <p className="mv-intro">
        Brindamos <span>Asesoría en el Manejo del Sistema Visual Plus</span> (antiguo Visual FAC),
        así como en tributos y finanzas. Ofrecemos paquetes cómodos para grandes, medianas y pequeñas empresas en Ecuador,
        respondiendo a las necesidades específicas de cada uno de nuestros clientes.
      </p>

      <div className="mv-grid">
        <div className="mv-card">
          <h2 className="mv-card-title">Misión</h2>
          <p>
            Somos una empresa multidisciplinaria que apuesta a la capacitación continuada de sus funcionarios,
            brindando servicios personalizados y automatizados de auditoría, contabilidad y consultoría a empresas.
          </p>
        </div>

        <div className="mv-card">
          <h2 className="mv-card-title">Visión</h2>
          <p>
            Ser una firma líder en la zona en proveer atención personalizada de servicios de CONTABILIDAD – AUDITORIA –
            CONSULTORIA, respaldados en la más alta calidad técnica de nuestros profesionales, ejecutando con ética
            para contribuir al logro de objetivos a corto, mediano y largo plazo.
          </p>
        </div>
      </div>
    </section>
  );
}
