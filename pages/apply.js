import React from "react";
import { useRouter } from "next/router";
import {
  ApplyForm,
  LoginForm
} from "../src/Components/ApplyPageComponents/Index";
import { AUTH_TOKEN } from "../src/Components/constant";

export default function Apply() {
  const router = useRouter();
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    setToken(authToken);
  }, []);

  if (!token) return <LoginForm />;
  return <React.Fragment>{token && <ApplyForm />}</React.Fragment>;
}
