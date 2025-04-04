import type { Character } from "@/builder/builderTypes";
import Image from "next/image";
import type { FC } from "react";

interface CharacterSheetProps {
  character: Character;
}

const CharacterSheet: FC<CharacterSheetProps> = ({ character }) => {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={character.image}
        alt={character.image}
        width={200}
        height={200}
      />
      <span className="text-2xl">{character.description}</span>
    </div>
  );
};

export default CharacterSheet;
