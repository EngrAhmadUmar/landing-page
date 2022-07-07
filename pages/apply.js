import React from "react";
<<<<<<< HEAD
// import { Link } from "react-router-dom";
import { ApplyForm } from "../src/Components/ApplyPageComponents/Index";

=======
import { ApplyForm } from "../src/Components/ApplyPageComponents/Index";
import Login from "../src/Components/ApplyPageComponents/LoginForm";
import { AUTH_TOKEN } from "../src/Components/constant";
>>>>>>> ef66d41721fd4029aab6f86ec54ecec9f80c8717
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
