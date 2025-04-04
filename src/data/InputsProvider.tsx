import {
  createContext,
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
  useState,
} from "react";

export const InputsContext = createContext<{
  inputs: string[];
  setInputs: Dispatch<SetStateAction<string[]>>;
}>({ inputs: [], setInputs: () => {} });

const InputsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [inputs, setInputs] = useState<string[]>([]);

  return (
    <InputsContext.Provider value={{ inputs, setInputs }}>
      {children}
    </InputsContext.Provider>
  );
};

export default InputsProvider;
