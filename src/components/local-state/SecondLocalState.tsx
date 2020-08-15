import React from "react";

export const SecondLocalState = React.memo(() => {
  const [counter, setCounter] = React.useState(0);
  console.log("second local state", counter);
  return (
    <div
      className="SecondLocalState"
      // onClick={React.useCallback(
      //   (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      //     e.stopPropagation();
      //     setCounter(counter + 1);
      //   },
      //   [counter]
      // )}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setCounter(counter + 1);
      }}
    >
      My Second Local State {counter}
      <DummyComponent />
    </div>
  );
});
function DummyComponent() {
  console.log("Dummy");
  return <div>Dummy</div>;
}
