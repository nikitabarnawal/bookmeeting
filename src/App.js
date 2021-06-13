import React from "react";
import Buildings from '../src/Component/Buildings';

function App({ query }) {
  return (
    <div className="App" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
      <p>yo nikita!</p>
      <Buildings query={query} />
    </div>
  );
}

export default App;
