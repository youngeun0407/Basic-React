import { useState } from "react";
import './App.css'
function App() {

const [count, setCount] = useState(0);
const addCount = () => {
 setCount(count + 1); 
};

const minusCount = () => {
  setCount(count - 1);
};

const reset = () => {
  setCount(0);
};

return (
  <div className="App">
    <div className="count">
      <button onClick={minusCount}>-</button>
      Count: {count}
      <button onClick={addCount}>+</button>
      <button onClick={reset}>reset</button>
    </div>
    </div>
  );
}

export default App;
