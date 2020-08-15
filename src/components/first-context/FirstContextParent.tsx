import React from "react";
import { FirstContext } from "./FirstContext";

export const FirstContextParent = React.memo(() => {
  console.log("FirstContextParent");
  return (
    <div>
      <FirstContext name="Child of parent" />
    </div>
  );
});
