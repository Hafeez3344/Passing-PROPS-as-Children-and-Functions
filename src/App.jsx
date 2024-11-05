import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  // function App(children) {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1)
  }
  return (
    <>
      <Card name="hafeez">
        <h1>My name is Hafeez Khan</h1>
        <p>I am web developer</p>
        <p>from lahore</p>
      </Card>

      {/* <Card children = "hello"> */}
      {/* in this tut i am learning passing props */}
      {/* </Card> */}

      <Button handleClick={handleClick} text="Click me">
        <h1>{count}</h1>
      </Button>
    </>
  );
}

export default App;
