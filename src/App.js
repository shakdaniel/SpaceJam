import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Routes from "./routes";

const App = props => (
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>
  </BrowserRouter>
);

export default App;
