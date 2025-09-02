import './Features.css'
import sriIcon from '../../assets/sri.svg' 

const Features = () => {
  const features = [
    {
      title: "Licencia perpetua",
      description: "Paga una sola vez y olvídate de suscripciones mensuales.",
      icon: "🏷️"
    },
    {
      title: "Seguridad avanzada",
      description: "Tus datos protegidos con encriptación de nivel empresarial y auditorías aprobadas que garantizan la integridad de tus datos.",
      icon: "🔒"
    },
    {
      title: "Módulos personalizables",
      description: "Adquiere solo lo que necesitas: facturación, inventarios, contabilidad, compras, ventas, retenciones, ATS, nómina, bancos, etc.",
      icon: "🧩"
    },
    {
      title: "Actualizaciones y Soporte",
      description: "Software altamente optimizado con mejoras continuas, respaldo técnico y asesoría contable especializada.",
      icon: "🔄"
    },
    {
      title: "Cumplimiento con el SRI",
      description: "facturación electrónica 100% segura, rápida y confiable",
      icon: <img src={sriIcon} alt="SRI" className="feature-img"/> // aquí va la imagen
    },
    {
      title: "Potente",
      description: "Herramientas avanzadas para resultados profesionales.",
      icon: "💪"
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Características principales</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features