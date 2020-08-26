import React from "react";
import { FirstChild } from "./nested-components/FirstChild";
import { SecondChild } from "./nested-components/SecondChild";

export function NestedComponents() {
  const [isFirst, setIsFirst] = React.useState(false);
  return (
    <div onClick={() => setIsFirst(!isFirst)}>
      {isFirst ? <FirstChild /> : <SecondChild />}
    </div>
  );
}
