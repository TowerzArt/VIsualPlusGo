import './Header.css'
//import logo from '../../assets/logos/Tow-D.png'
//import logo2 from '../../assets/logos/Tow-W.png'
import logovisual from '../../assets/logos/vp-D.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logovisual} alt="MiMarca" className="logo-img" />
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#features">Características</a></li>
              <li><a href="#modulos">Módulos</a></li>
              <li><a href="#contacto">Contacto</a></li>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header