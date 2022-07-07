import React from "react";
import { ApplyForm } from "../src/Components/ApplyPageComponents/Index";
import Login from "../src/Components/ApplyPageComponents/LoginForm";
import { AUTH_TOKEN } from "../src/Components/constant";
export default function Apply() {
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    setToken(authToken);
  }, []);

  if(!token) return <Login />
  return (
    <React.Fragment>
      {token && (
      <ApplyForm />
      )}
    </React.Fragment>
  );
}
