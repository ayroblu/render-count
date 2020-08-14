import React from "react";
import { context } from "../FirstStore";
import { actions } from "../../reducer";

export function FirstContext() {
  const { state, dispatch } = React.useContext(context);
  console.log("first context");
  return (
    <div
      className="FirstContext"
      onClick={React.useCallback(
        () => dispatch(actions.mainSet({ value1: state.value1 + 1 })),
        [dispatch, state.value1]
      )}
    >
      {state.value1}
    </div>
  );
}
