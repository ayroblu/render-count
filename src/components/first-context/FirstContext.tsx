import React from "react";
import { context } from "../FirstStore";
import { actions } from "../../reducer";

type Props = {
  name?: string;
};
export const FirstContext: React.FC<Props> = React.memo(({ name }) => {
  const [counter, setCounter] = React.useState(0);
  const { state, dispatch } = React.useContext(context);
  console.log("first context", name);
  return (
    <div
      className="FirstContext"
      onClick={React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          dispatch(actions.mainSet({ value1: state.value1 + 1 }));
        },
        [dispatch, state.value1]
      )}
    >
      First Context: {state.value1}
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
    </div>
  );
});
