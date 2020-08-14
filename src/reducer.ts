// ------------ State
export const mainInitialState: MainState = {
  value1: 0,
  value2: 0,
};
export type MainState = {
  value1: number;
  value2: number;
};

// ------------ Actions
export function mainSet(payload: Partial<MainState>) {
  return {
    type: "MAIN/SET",
    payload,
  } as const;
}
export const actions = {
  mainSet,
} as const;

export type MainActions = ReturnType<ValueOf<typeof actions>>;

type ValueOf<T extends {}> = T[keyof T];

// ------------ Reducer
export const mainReducer = (
  state: MainState,
  action: MainActions
): MainState => {
  switch (action.type) {
    case "MAIN/SET":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
