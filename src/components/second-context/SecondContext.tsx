import React from "react";
import { context } from "../SecondStore";
import { actions } from "../../reducer";

export const SecondContext = React.memo(() => {
  const { state, dispatch } = React.useContext(context);
  console.log("Second Context");
  return (
    <div
      className="SecondContext"
      onClick={React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          dispatch(actions.mainSet({ value2: state.value2 + 1 }));
        },
        [dispatch, state.value2]
      )}
    >
      Second Context: {state.value2}
    </div>
  );
});
