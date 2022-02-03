import { useState, useEffect } from "react";
import AppRouter from "./services/AppRouter";
import Layout from "./components/Layout";

const Index = () => {
  const [user, setUser] = useState({ id: "", name: "", email: "" });

  useEffect(async () => {
    const response = await fetch("/api/user");
    const data = await response.json();

    if (!data.loggedin) return;

    setUser({ id: data.user.id, name: data.user.name, email: data.user.email });
  }, []);

  return (
    <Layout user={user} setUser={setUser}>
      <AppRouter user={user} setUser={setUser} />
    </Layout>
  );
};

export default Index;
