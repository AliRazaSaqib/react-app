import React from "react";
import Providers from "./store/Provider";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Providers>
        <Home />
      </Providers>
    </div>
  );
}

export default App;
