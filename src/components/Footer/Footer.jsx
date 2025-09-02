import './Footer.css'
//import logo from '../../assets/logos/Tow-W.png'
import logovisual from '../../assets/logos/vp-W.png'

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logovisual} alt="Towerz Art" className="logo-img" />
            <p>Todo lo que necesitas para cumplir con SRI, IESS, MRL y la Superintendencia, en una sola plataforma.</p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>juanpablotorrescalva@gmail.com</p>
            <p>+593 9 8 0557586</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#features">Características</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Towerz Art. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer