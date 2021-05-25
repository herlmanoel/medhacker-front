import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../../context/AuthProvider";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authorized } = useContext(Context);

  return (
    <Route
      {...rest}
      render={(props) =>
        authorized ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};
