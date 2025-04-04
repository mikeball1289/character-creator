import { useContext } from "react";
import { InputsContext } from "./InputsProvider";

export const useInputs = () => {
  return useContext(InputsContext);
};
