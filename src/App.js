import React from "react";
import Buildings from '../src/Component/Buildings';

function App({ query }) {
  return (
    <div className="App">
      <Buildings query={query} />
    </div>
  );
}

export default App;
