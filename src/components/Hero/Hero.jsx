import './Hero.css'
import start from "../../assets/start.png";


const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>La solución integral para el crecimiento de tu empresa</h1>
            <p>VisualPlus es un ERP modular y flexible diseñado para adaptarse a las necesidades específicas de tu negocio. Con una interfaz intuitiva y un rendimiento optimizado, te permite gestionar de manera ágil y segura áreas críticas como ventas, compras, inventarios, contabilidad y recursos humanos.</p>
            <button className="cta-button">Comenzar ahora</button>
          </div>
          <div className="hero-image">
            <img src={start}  className="card" alt={"Visual Plus"} /> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero