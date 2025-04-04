import type { Character, Step } from "./builderTypes";
import { characterDetail, getCharacterName } from "./characterDetails";

const classStep: Step = {
  label: "Pick your class:",
  options: [{ value: "fighter" }, { value: "wizard" }],
};

const wizardStep: Step = {
  label: "What's your age?",
  options: [{ value: "old" }, { value: "young" }],
};

const fighterStep: Step = {
  label: "Choose a weapon:",
  options: [{ value: "sword" }, { value: "axe" }],
};

export const builder = (
  inputs: string[],
): { character: Character; steps: Step[] } => {
  const characterName = getCharacterName(inputs);
  const character = characterDetail[characterName];

  if (inputs[0] === "wizard") {
    return {
      character,
      steps: [classStep, wizardStep],
    };
  }

  if (inputs[0] === "fighter") {
    return {
      character,
      steps: [classStep, fighterStep],
    };
  }

  return {
    character,
    steps: [classStep],
  };
};
