import React from "react";
import { context } from "../SecondStore";
import { actions } from "../../reducer";

export const SecondBothContext = React.memo(() => {
  const { state, dispatch } = React.useContext(context);
  console.log("Second Both Context");
  return (
    <div
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

