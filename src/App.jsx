import "./App.css";
import { useReducer } from "react";
import Transfer from "./Transfer";
import ToggleButtons from "./ToggleButtons";

const incrementDecrement = (state, action) => {
  switch (action.type) {
    case "increment": {
      return state + 1;
    }
    case "decrement": {
      return state > 0 ? state - 1 : 0;
    }
    default: {
      return state;
    }
  }
};

function App() {
  const [count, dispatch] = useReducer(incrementDecrement, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <hr />
      <Transfer />
      <hr />
      <hr />
      <ToggleButtons />
    </div>
  );
}

export default App;
