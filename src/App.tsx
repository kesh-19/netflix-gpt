import { useState, useEffect } from "react";

function App() {
  const [first, setFirst] = useState(0);

  useEffect(() => {
    setFirst(1);
  }, []);

  return <div className="App">{first}</div>;
}

export default App;
