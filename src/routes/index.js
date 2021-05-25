import { useContext } from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import GlobalStyle from "../styles/global";

import history from "./history";
import Login from "../pages/Login";
import FormUsuario from "../pages/Usuario/Form";
import ListagemUsuarios from "../pages/Usuario/Listagem";
import FormEvento from "../pages/Evento/Form";
import ListagemEventos from "../pages/Evento/Listagem";
import ListagemGrupos from "../pages/Grupo/Listagem";
import FormGrupo from "../pages/Grupo/Form";
import Configuracoes from "../pages/Configuracoes";
import Home from "../pages/Home";
import LoadingComponent from "../components/Loading";
import { Context } from "../context/AuthProvider";
import { ProviderModal } from "../pages/Home/context/contextModal";
import ContextUsuario from "../context/Usuario";
import ContextEvento from "../context/Evento";

import { PrivateRoute } from "./components/PrivateRoute";

function RouterItems() {
  return (
    <ContextUsuario>
      <ContextEvento>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to={{ pathname: "/login" }} />}
            />
            <PrivateRoute exact path="/sair" component={Login} />
            <Route exact path="/login" component={Login} />

            <PrivateRoute exact path="/formusuario" component={FormUsuario} />
            <PrivateRoute
              exact
              path="/listagemusuarios"
              component={ListagemUsuarios}
            />

            <PrivateRoute exact path="/formevento" component={FormEvento} />
            <PrivateRoute
              exact
              path="/ListagemEventos"
              component={ListagemEventos}
            />

            <PrivateRoute
              exact
              path="/Configuracoes"
              component={Configuracoes}
            />

            <PrivateRoute
              exact
              path="/ListagemGrupos"
              component={ListagemGrupos}
            />
            <PrivateRoute exact path="/FormGrupo" component={FormGrupo} />
            <PrivateRoute
              path="/app"
              component={() => <h1>Você está logado</h1>}
            />
            <ProviderModal>
              <PrivateRoute exact path="/Home" component={Home} />
            </ProviderModal>
          </Switch>
        </Router>
      </ContextEvento>
    </ContextUsuario>
  );
}

const Routes = () => {
  const { loading } = useContext(Context);

  return (
    <>
      <GlobalStyle />
      {loading ? <LoadingComponent /> : <RouterItems />}
    </>
  );
};

export default Routes;
