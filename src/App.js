import React from "react";
import Buildings from '../src/Component/Buildings';

function App({ query }) {
  return (
    <div className="App">
      <p>yo nikita!</p>
      <Buildings query={query} />
    </div>
  );
}

export default App;
