import { useState } from "react";

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
    <div>
      <button onClick={minusCount}>-</button>
      Count: {count}
      <button onClick={addCount}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
