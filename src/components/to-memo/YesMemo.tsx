import React from "react";

type Props = {
  name?: string;
  param?: any;
};

export const YesMemo: React.FC<Props> = React.memo(({ name, param }) => {
  const [counter, setCounter] = React.useState(0);
  console.log("Yes memo", name, param);
  return (
    <div
      onClick={React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          setCounter(counter + 1);
        },
        [counter]
      )}
    >
      YesMemo {counter}
    </div>
  );
});
