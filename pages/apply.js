
import React from "react";
// import { Link } from "react-router-dom";
import { ApplyForm } from "../src/Components/ApplyPageComponents/Index";
import { LoginForm } from "../src/Components/ApplyPageComponents/Index";
import AUTH_TOKEN from "../src/Components/constant";
export default function Apply() {
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    setToken(authToken);
  }, []);

  if(!token) return <LoginForm />
  return (
    <React.Fragment>
      {token && (
      <ApplyForm />
      )}
    </React.Fragment>
  );
}
