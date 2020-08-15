import React from "react";
import { context } from "../FirstStore";
import { actions } from "../../reducer";
import { SecondBothContext } from "./SecondBothContext";

export const FirstBothContext: React.FC = React.memo(() => {
  const [counter, setCounter] = React.useState(0);
  const { state, dispatch } = React.useContext(context);
  console.log("first both context");
  return (
    <div
      onClick={React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          dispatch(actions.mainSet({ value1: state.value1 + 1 }));
        },
        [dispatch, state.value1]
      )}
    >
      First Both Context: {state.value1}
      <div
        onClick={React.useCallback(
          (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            setCounter(counter + 1);
          },
          [counter]
        )}
      >
        (counter: {counter})
      </div>
      <SecondBothContext />
    </div>
  );
});
