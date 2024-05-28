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


//복습 
//첫번째 예시
// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const addCount = () => {
//     setCount(count + 1);
//   };
//   const minusCount = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <button onClick={minusCount}>-</button>
//       count : {count}
//       <button onClick={addCount}>+</button>
//     </div>
//   );
// };

//두번째 예시 (다크모드:화이트모드)
// function App() {
//   const [isDark, setIsDark] = useState(false);
//  const changeMode = () => {
//    setIsDark(!isDark);
//  }
//   return (
//     <div style={{backgroundColor: isDark ? "black" : "white",
//       color: isDark? "white" : "black",
     
//     }}>
//       {isDark ? "다크모드" : "화이트모드"}
//       <button onClick={changeMode}>change</button>
//     </div>
//   );
// }

// export default App;


//세번째 예시

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const handleInputChange = (e) => {
//   setInputValue(e.target.value);
// };
// const handleSubmit = () => {
//   alert(`입력한 값: ${inputValue}`);
//   setInputValue("");
// };
//   return (
//     <div>
//       <input
//         type="text" value={inputValue}
//         onChange={handleInputChange}
//         placeholder="입력하세요"
//       />
//       <button onClick={handleSubmit}>제출</button>
//     </div>
//   );
// }

// export default App;