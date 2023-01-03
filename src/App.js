import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ListPage from "./pages/ListPage/ListPage";
import Navbar from "./components/Navbar/Navbar";
import ListItem from "./pages/ListItem";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <ListPage />
            </Layout>
          }
        />
        <Route path="/characters" element={<ListPage />} />
        <Route path="/characters/:id" element={<ListItem />} />
      </Routes>
    </Router>
  );
};

export default App;
