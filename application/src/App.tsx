import React from "react";
import { Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
// Pages
import Users from "./pages/users";
import Organizations from "./pages/organizations";
import Divisions from "./pages/divisions";
import ThemesPage from "./pages/themes";
import Days from "./pages/days";
import TimePage from "./pages/time";
import MakeAppointment from "./pages/makeAppointment";
import QualityOfservice from "./pages/qualityOfservice";
import Authorization from "./pages/authorization";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="/users" element={<Users />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/themes" element={<ThemesPage />} />
        <Route path="/days" element={<Days />} />
        <Route path="/time" element={<TimePage />} />
        <Route path="/makeAppointment" element={<MakeAppointment />} />
        <Route path="/qualityOfservice" element={<QualityOfservice />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
