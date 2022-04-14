import { useState, useEffect } from "react";
import Main from "./Main";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Main />
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;