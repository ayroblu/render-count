import React from "react";

type Props = {
  value: number;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export const First: React.FC<Props> = React.memo(({ value, onClick }) => {
  console.log("First!");
  return <div onClick={onClick}>This is my first component: {value}</div>;
});
