
import React from "react";
// import { Link } from "react-router-dom";
import { ApplyForm } from "../src/Components/ApplyPageComponents/Index";

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
