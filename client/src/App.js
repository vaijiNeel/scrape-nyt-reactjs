import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrapeNYT from "./components/main";

const App = () =>
  <Router>
    <div>
      <Route path="/" component={ScrapeNYT} />
    </div>
  </Router>;

export default App;