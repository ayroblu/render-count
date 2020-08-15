import React from "react";
import { context } from "../FirstStore";
import { actions } from "../../reducer";
import { First } from "./First";

export const ConnectedFirst = React.memo(() => {
  const { state, dispatch } = React.useContext(context);
  console.log("ConnectedFirst");
  return (
    <First
      value={state.value2}
      onClick={React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          dispatch(actions.mainSet({ value2: state.value2 + 1 }));
        },
        [dispatch, state.value2]
      )}
    />
  );
});
