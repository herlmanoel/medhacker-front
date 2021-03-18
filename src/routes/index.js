import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { estaAutenticado } from "../services/Autenticacao/index";
import GlobalStyle from '../styles/global';

import Login from '../pages/Login';
// import ListagemUsuarios from '../pages/ListagemUsuarios';
// import ListagemEventos from '../pages/ListagemEventos';
import FormUsuario from '../pages/Usuario/Form';
import ListagemUsuarios from '../pages/Usuario/Listagem';
import FormEvento from '../pages/Evento/Form';
import ListagemEventos from '../pages/Evento/Listagem';
import FormProjeto from '../pages/Projeto/Form';
import Configuracoes from '../pages/Configuracoes';
import Home from '../pages/Home';

// Configuracoes
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      estaAutenticado() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/formprojeto" component={FormProjeto} />
        <Route exact path="/formusuario" component={FormUsuario} />
        <Route exact path="/formevento" component={FormEvento} />
        <Route exact path="/Configuracoes" component={Configuracoes} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/listagemusuarios" component={ListagemUsuarios} />
        <Route exact path="/ListagemEventos" component={ListagemEventos} />
        <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
