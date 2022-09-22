import { createContext, Dispatch, SetStateAction } from "react";

type ContextState = {
  sort: [Boolean, Dispatch<SetStateAction<Boolean>>];
  create: [Boolean, Dispatch<SetStateAction<Boolean>>];
};
export const SelectContext = createContext({} as ContextState);
