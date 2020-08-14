import React from "react";

import {
  MainActions,
  mainInitialState,
  mainReducer,
  MainState,
} from "./../reducer";

type IContextProps = {
  state: MainState;
  dispatch: React.Dispatch<MainActions>;
};

export const context = React.createContext(({} as any) as IContextProps);
const { Provider } = context;

export const SecondStore: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(mainReducer, mainInitialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
