import React, { useState } from "react";
import "./CardsGrid.css";

// Import images
import account from "../../assets/modulos/account.png";
import anexos from "../../assets/modulos/anexos.png";
import auditoria from "../../assets/modulos/auditoria.png";
import autoauditoria from "../../assets/modulos/autoauditoria.png";
import bankacc from "../../assets/modulos/bankacc.png";
import bodega from "../../assets/modulos/bodega.png";
import caja from "../../assets/modulos/caja.png";
import cajachica from "../../assets/modulos/cajachica.png";
import comisiones from "../../assets/modulos/comisiones.png";
import cuposventas from "../../assets/modulos/cuposventas.png";
import cxc from "../../assets/modulos/cxc.png";
import cxp from "../../assets/modulos/cxp.png";
import dashboard from "../../assets/modulos/dashboard.png";
import direc from "../../assets/modulos/direc.png";
import docelec from "../../assets/modulos/docelec.png";
import expenses from "../../assets/modulos/expenses.png";
import financiero from "../../assets/modulos/financiero.png";
import gasolina from "../../assets/modulos/gasolina.png";
import gerencial from "../../assets/modulos/gerencial.png";
import ghostadm from "../../assets/modulos/ghostadm.png";
//import importaciones from "../../assets/modulos/importaciones.png";
import importveh from "../../assets/modulos/importveh.png";
//import info from "../../assets/modulos/info.png";
import invent from "../../assets/modulos/invent.png";
import invoice from "../../assets/modulos/invoice.png";
import item from "../../assets/modulos/item.png"; 
import nomina from "../../assets/modulos/nomina.png";
import pedidos from "../../assets/modulos/pedidos.png";
import po from "../../assets/modulos/po.png";
import presupuesto from "../../assets/modulos/presupuesto.png";
import punto from "../../assets/modulos/punto.png";
import quote from "../../assets/modulos/quote.png";
import rebate from "../../assets/modulos/rebate.png";
//import series from "../../assets/modulos/series.png";
import trazabilidad from "../../assets/modulos/trazabilidad.png"; 

// Images array with imports
const images = [
  { id: 1, src: account, category: ["contable"] },
  { id: 2, src: anexos, category: ["contable"] },
  { id: 3, src: auditoria, category: ["factinvent","factservi"] }, 
  { id: 5, src: bankacc, category: ["contable"] },
  { id: 6, src: bodega, category: ["person"] },
  { id: 7, src: caja, category: ["factinvent","factservi"] },
  { id: 8, src: cajachica, category: [""] },
  { id: 9, src: comisiones, category: ["person"] },
  { id: 10, src: cuposventas, category: ["fact2servi"] },
  { id: 11, src: cxc, category: ["factinvent","factservi"] },
  { id: 12, src: cxp, category: ["factinvent","factservi"] },
  { id: 13, src: dashboard, category: [""] },
  { id: 14, src: direc, category: ["factinvent","factservi"] },
  { id: 15, src: docelec, category: [""] },
  { id: 16, src: expenses, category: [""] },
  { id: 17, src: financiero, category: ["person"] },
  { id: 18, src: gasolina, category: ["especif"] },
  { id: 19, src: gerencial, category: ["fact2servi"] },
  { id: 20, src: ghostadm, category: ["especif"] }, 
  { id: 22, src: importveh, category: [""] }, 
  { id: 24, src: invent, category: ["factinvent"] },
  { id: 25, src: invoice, category: ["factinvent","factservi"] },
  { id: 26, src: item, category: ["factinvent","factservi"] }, 
  { id: 28, src: nomina, category: ["person"] },
  { id: 29, src: pedidos, category: ["person"] },
  { id: 30, src: po, category: ["factinvent","factservi"] },
  { id: 31, src: presupuesto, category: ["fact2servi"] },
  { id: 32, src: punto, category: ["especif"] },
  { id: 33, src: quote, category: ["factinvent","factservi"] },
  { id: 34, src: rebate, category: [""] }, 
  { id: 36, src: trazabilidad, category: ["fact2servi"] }, 
];

const tabs = [
  { id: "todos", label: "Todos" },
  { id: "factinvent", label: "Facturación de Inventario" },
  { id: "factservi", label: "Facturación de Servicio" },
  { id: "contable", label: "Contable" },
  { id: "person", label: "Personalizables" },
  { id: "especif", label: "Específicos" },
];

export default function CardsGrid() {
  const [activeTab, setActiveTab] = useState("todos");

const filteredImages =
  activeTab === "todos"
    ? images
    : images.filter((img) => img.category.includes(activeTab));


  return (
    <section id="modulos" className="modulos">
        <h2>Módulos disponibles</h2>
    <div className="cards-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {filteredImages.map((img) => (
          <div key={img.id}>
            <img src={img.src}  className="card" alt={img.title} /> 
          </div>
        ))}
      </div>
    </div> </section>
  );
}
