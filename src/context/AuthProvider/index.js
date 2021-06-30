import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "../../services";
import history from "../../routes/history";

const Context = createContext();

function AuthProvider({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      axios.defaults.headers.authorization = `Bearer ${token}`;
      setAuthorized(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(event, { email = "", senha = "" }, notify) {
    event.preventDefault();
    try {
      axios
        .post("/autenticar", { email, senha })
        .then((response) => {
          console.log(response);
          console.log(response);
          const {
            data: { token },
          } = response;
          localStorage.setItem("token", JSON.stringify(token));
          axios.defaults.headers.authorization = `Bearer ${token}`;
          notify.ssuccess();
          setAuthorized(true);
          history.push("/Home");
        })
        .catch((err) => {
          console.log(err);
          notify.error();
          return history.push({
            pathname: "/login",
            state: {
              error: true,
            },
          });
        });
    } catch (error) {
      console.error("erro: ", error);
    }
  }

  async function handleLogout() {
    setAuthorized(false);
    localStorage.removeItem("token");
    axios.defaults.headers.authorization = undefined;
    history.push("/login");
  }

  return (
    <Context.Provider
      value={{ authorized, setAuthorized, loading, handleLogin, handleLogout }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
