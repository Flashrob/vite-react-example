import { useState } from "react";
import "./App.css";
import { HelloWorld } from "./components/HelloWorld";

function App() {
  // Defining state
  const [count, setCount] = useState(0);
  return (
    <>
      <HelloWorld />
      {/* conditional rendering */}
      {count == 0 ? <h1>NO COUNT!</h1> : null}
      {/* passing down props */}
      <Button setCount={setCount} count={count} />
      <p>count is {count}</p>
    </>
  );
}

const Button = (props) => {
  return (
    <button
      onClick={() => {
        // On click we can call the referenced function, which passes updated state up to the parent component
        props.setCount(props.count + 1);
      }}
    >
      Button
    </button>
  );
};

export default App;

/*
0. React? What is it? Why?
1. React Components
  - Container
2. React State
3. React Props
*/

const CompA = () => {
  const [state, setState] = useState(0);

  return <h1>sadssfs</h1>;
};

const CompB = () => {
  return <h1>sadssfs</h1>;
};

const Abb = () => {
  return (
    <>
      {/* Sharing state between siblings is not possible, unless a parent will contain the state */}
      <CompA />
      <CompB />
    </>
  );
};
