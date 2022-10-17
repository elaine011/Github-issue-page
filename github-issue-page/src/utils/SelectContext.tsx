import { createContext, Dispatch, SetStateAction } from "react";

export type Labels = {
  [x: string]: any;
  color: string;
  default: boolean;
  description: string;
  id: number;
  name: string;
  node_id: string;
  url: string;
};

type ContextState = {
  sort: [Boolean, Dispatch<SetStateAction<Boolean>>];
  create: [Boolean, Dispatch<SetStateAction<Boolean>>];
  labels: [Labels[], Dispatch<SetStateAction<Labels[]>>];
};
export const SelectContext = createContext({} as ContextState);

export const IssueContext = createContext({});

export const UserContext = createContext({});
