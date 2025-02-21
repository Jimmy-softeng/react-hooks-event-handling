import React from "react";
import Tickler from "./Tickler";
import MultiButton from "./MultiButton";
import ChangeItUp from "./ChangeItUp";
import Login from "./Login";
import Keypad from "./Keypad";
import EyesOnMe from "./EyesOnMe";

function App() {
  return (
    <div>
      <h3>onClick</h3>
      <Tickler />
      <hr />

      <MultiButton />
      <hr />

      <h3>onChange</h3>
      <ChangeItUp />
      <hr />

      <h3>onSubmit</h3>
      <Login />
      <hr />
      
      <h3>Keypad</h3>
      <Keypad />
      <hr />

      <h3>EyesOnMe</h3>
      <EyesOnMe />
      <hr />



    </div>
  );
}

export default App;
