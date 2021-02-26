import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { estaAutenticado } from "../services/Autenticacao/index";
import GlobalStyle from '../styles/global';

import Login from '../pages/Login';
import ListagemUsuarios from '../pages/ListagemUsuarios';
import ListagemEventos from '../pages/ListagemEventos';
import FormUsuario from '../pages/FormUsuario';

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
        <Route exact path="/" component={Login} />
        <Route exact path="/formusuario" component={FormUsuario} />
        <Route exact path="/listagemusuarios" component={ListagemUsuarios} />
        <Route exact path="/ListagemEventos" component={ListagemEventos} />
        <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
