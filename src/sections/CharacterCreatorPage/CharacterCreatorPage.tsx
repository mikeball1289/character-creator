import { builder } from "@/builder/characterBuilder";
import { useInputs } from "@/data/useInputs";
import type { FC } from "react";
import InputPanel from "../InputPanel/InputPanel";
import OutputPanel from "../OutputPanel/OutputPanel";

const CharacterCreatorPage: FC = () => {
  const { inputs } = useInputs();
  const { steps, character } = builder(inputs);

  return (
    <div className="p-12 flex flex-row">
      <InputPanel steps={steps} />
      <OutputPanel character={character} />
    </div>
  );
};

export default CharacterCreatorPage;
