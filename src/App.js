import React from "react";
import { Route,Routes } from "react-router-dom";

//Custom components
import Layout from "./components/Layout/Layout";

//Custom pages
import CalendarView from "./pages/CalendarView/CalendarView"

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<CalendarView/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
