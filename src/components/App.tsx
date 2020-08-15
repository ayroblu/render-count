import React from "react";
import { FirstStore } from "./FirstStore";
import { FirstContext } from "./first-context/FirstContext";
import { SecondStore } from "./SecondStore";
import { SecondContext } from "./second-context/SecondContext";
import { LocalState } from "./local-state/LocalState";
import { SecondLocalState } from "./local-state/SecondLocalState";
import { ToMemo } from "./to-memo/ToMemo";
import { FirstContextParent } from "./first-context/FirstContextParent";
import { FirstBothContext } from "./both-context/FirstBothContext";

export function App() {
  console.log("Render App");
  const [counter, setCounter] = React.useState(0);
  return (
    <div
      className="App"
      onClick={React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          setCounter(counter + 1);
        },
        [counter]
      )}
    >
      <h4>My App {counter}</h4>
      <ToMemo />
      <br />
      <LocalState name="parent">
        <LocalState name="child" />
        <SecondLocalState />
      </LocalState>
      <br />
      <SecondLocalState />
      <br />
      <FirstStore>
        <FirstContext name="app level" />
        <FirstContextParent />
      </FirstStore>
      <br />
      <MemoStore />
      <br />
      <h5>Both Contexts</h5>
      <MemoNestedStore />
    </div>
  );
}
const MemoStore = React.memo(() => {
  return (
    <SecondStore>
      <SecondContext />
    </SecondStore>
  );
});
const MemoNestedStore = React.memo(() => {
  return (
    <FirstStore>
      <SecondStore>
        <FirstContext name="both contexts" />
        <br />
        <SecondContext />
        <br />
        <FirstBothContext />
      </SecondStore>
    </FirstStore>
  );
});
