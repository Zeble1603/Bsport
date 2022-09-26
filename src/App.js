import React from "react";
import { Route,Routes } from "react-router-dom";

//Components
import Layout from "./components/Layout/Layout";

//Pages
import MainView from "./pages/MainView/MainView";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<MainView/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
