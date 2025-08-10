import logo from "./logo.svg";
import "./App.css";
import Messagecontext from "./context/MessageContext";
import { useContext } from "react";

function App() {
  const message = "Hello World";
  return (
    <div className="App">
      <Messagecontext.Provider value={message}>
        <ComponentA></ComponentA>
      </Messagecontext.Provider>
    </div>
  );
}

function ComponentA() {
  return <ComponentB></ComponentB>;
}
function ComponentB() {
  const message = useContext(Messagecontext);
  return <div>Message : {message}</div>;
}
export default App;
