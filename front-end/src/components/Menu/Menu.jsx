import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Menu = () => (
  <nav>
    <ul className="menu">
      <li className="menu__item">
        <Link className="menu__link" to="/">Home</Link>
      </li>
      <li className="menu__item">
        <Link  className="menu__link" to="/clientes">Clientes</Link>
      </li>
      <li className="menu__item">
        <Link  className="menu__link" to="/pets">Pets</Link>
      </li>
      <li className="menu__item">
        <Link  className="menu__link" to="/servicos">Serviços</Link>
      </li>
      <li className="menu__item">
        <Link  className="menu__link" to="/atendimentos">Atendimentos
        </Link>
      </li>
    </ul>
  </nav>
)

export default Menu