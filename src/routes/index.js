import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import { isAuthenticate } from "../services/Autenticacao/index";
import GlobalStyle from '../styles/global';

import Login from '../pages/Login';
import FormUsuario from '../pages/Usuario/Form';
import ListagemUsuarios from '../pages/Usuario/Listagem';
import FormEvento from '../pages/Evento/Form';
import ListagemEventos from '../pages/Evento/Listagem';
import FormProjeto from '../pages/Projeto/Form';
import Configuracoes from '../pages/Configuracoes';
import Home from '../pages/Home';
import { useContext } from 'react';
import { Context } from '../context/AuthProvider';
import history from './history';
// Configuracoes
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authorized, setAuthorized } = useContext(Context);

  return (<Route
    {...rest}
    render={props =>
      authorized ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />);
};

const Routes = () => (
  <>
    <GlobalStyle />
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={{ pathname: "/login" }} />} />
        <PrivateRoute exact path="/sair" component={Login} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/formprojeto" component={FormProjeto} />
        <PrivateRoute exact path="/formusuario" component={FormUsuario} />
        <PrivateRoute exact path="/formevento" component={FormEvento} />
        <PrivateRoute exact path="/Configuracoes" component={Configuracoes} />
        <PrivateRoute exact path="/Home" component={Home} />
        <PrivateRoute exact path="/listagemusuarios" component={ListagemUsuarios} />
        <PrivateRoute exact path="/ListagemEventos" component={ListagemEventos} />
        <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
      </Switch>
    </Router>
  </>
);

export default Routes;
