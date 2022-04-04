import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './assets/styles/index.scss'
import Menu from './components/Menu'
import PaginaPrincipal from './components/PaginaPrincipal'
import ListaClientes from './components/Clientes/Lista'
import NovoCliente from './components/Clientes/Novo'
import AlterarCliente from './components/Clientes/Alterar'
import VisualizarCliente from './components/Clientes/Visualizar'
import ListaPets from './components/Pets/Lista'
import NovoPet from './components/Pets/Novo'
import AlterarPet from './components/Pets/Alterar'
import VisualizarPet from './components/Pets/Visualizar'

const App = () => (
  <Router>
    <Menu />

    <Switch>
      <Route exact path="/" component={PaginaPrincipal} />
      <Route exact path="/clientes" component={ListaClientes} />
      <Route exact path="/clientes/novo" component={NovoCliente} />
      <Route exact path="/clientes/:id" component={VisualizarCliente} />
      <Route exact path="/clientes/alterar/:id" component={AlterarCliente} />
      <Route exact path="/pets" component={ListaPets} />
      <Route exact path="/pets/novo" component={NovoPet} />
      <Route exact path="/pets/:id" component={VisualizarPet} />
      <Route exact path="/pets/alterar/:id" component={AlterarPet} />
    </Switch>
  </Router>
)

export default App
