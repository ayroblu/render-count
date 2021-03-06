import React from "react";

type Props = {
  name?: string;
};
export const LocalState: React.FC<Props> = React.memo(({ children, name }) => {
  const [counter, setCounter] = React.useState(0);
  console.log("local state", name);
  return (
    <div
      className="LocalState"
      onClick={React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          setCounter(counter + 1);
        },
        [counter]
      )}
    >
      Some Local State {counter}
      <div>{children}</div>
    </div>
  );
});
