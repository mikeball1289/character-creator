import type { Character } from "./builderTypes";

type CharacterName =
  | "blank"
  | "wizard"
  | "young_wizard"
  | "old_wizard"
  | "fighter"
  | "axe_fighter"
  | "sword_fighter";

type CharacterDetail = {
  [key in CharacterName]: Character;
};

export const characterDetail: CharacterDetail = {
  blank: {
    image: "blank.webp",
    description: "A blank slate. Get started customizing!",
  },
  fighter: {
    image: "fighter.webp",
    description: "Get back in the ring.",
  },
  axe_fighter: {
    image: "fighter_axe.png",
    description: "He just wants to axe you a question.",
  },
  sword_fighter: {
    image: "fighter_sword.webp",
    description: "I used to be an adventurer like you.",
  },
  wizard: {
    image: "wizard.jpg",
    description: "He's a magic man.",
  },
  young_wizard: {
    image: "young_wizard.webp",
    description: "You're a wizard, Harry.",
  },
  old_wizard: {
    image: "old_wizard.jpg",
    description: "You're a hairy wizard.",
  },
};

export const getCharacterName = (inputs: string[]): CharacterName => {
  switch (inputs[1]) {
    case "old":
      return "old_wizard";
    case "young":
      return "young_wizard";
    case "sword":
      return "sword_fighter";
    case "axe":
      return "axe_fighter";
  }

  switch (inputs[0]) {
    case "wizard":
      return "wizard";
    case "fighter":
      return "fighter";
  }

  return "blank";
};
