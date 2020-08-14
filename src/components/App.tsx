import React from "react";
import { FirstStore } from "./FirstStore";
import { FirstContext } from "./first-context/FirstContext";
import { SecondStore } from "./SecondStore";
import { SecondContext } from "./second-context/SecondContext";
import { LocalState } from "./local-state/LocalState";

export function App() {
  return (
    <div className="App">
      <div>My App</div>
      <LocalState>
        <LocalState />
      </LocalState>
      <FirstStore>
        <FirstContext />
      </FirstStore>
      <SecondStore>
        <SecondContext />
      </SecondStore>
    </div>
  );
}
