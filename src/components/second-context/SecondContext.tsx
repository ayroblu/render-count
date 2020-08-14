import React from "react";
import { context } from "../SecondStore";
import { actions } from "../../reducer";

export function SecondContext() {
  const { state, dispatch } = React.useContext(context);
  console.log("Second Context");
  return (
    <div
      className="SecondContext"
      onClick={React.useCallback(
        () => dispatch(actions.mainSet({ value2: state.value2 + 1 })),
        [dispatch, state.value2]
      )}
    >
      {state.value2}
    </div>
  );
}
