import { Route, Switch, Redirect, Router } from "react-router-dom";
import GlobalStyle from '../styles/global';

import Login from '../pages/Login';
import FormUsuario from '../pages/Usuario/Form';
import ListagemUsuarios from '../pages/Usuario/Listagem';
import FormEvento from '../pages/Evento/Form';
import ListagemEventos from '../pages/Evento/Listagem';
import FormProjeto from '../pages/Projeto/Form';
import ListagemGrupos from '../pages/Grupo/Listagem';
import FormGrupo from '../pages/Grupo/Form';
import Configuracoes from '../pages/Configuracoes';
import Home from '../pages/Home';
import { useContext } from 'react';
import { Context } from '../context/AuthProvider';
import history from './history';
import LoadingComponent from "../components/Loading";
// Configuracoes
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authorized } = useContext(Context);
  const d = useContext(Context);
  console.log(d);

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



function RouterItems() {
  return (
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
        <PrivateRoute exact path="/ListagemGrupos" component={ListagemGrupos} />
        <PrivateRoute exact path="/FormGrupo" component={FormGrupo} />
        <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
      </Switch>
    </Router>
  );
}

const Routes = () => {
  const { loading } = useContext(Context);


  return (
    <>
      <GlobalStyle />
      {loading
        ? <LoadingComponent />
        : <RouterItems />}
    </>
  )
};

export default Routes;
