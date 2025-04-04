import type { Character } from "@/builder/builderTypes";
import CharacterSheet from "@/components/CharacterSheet/CharacterSheet";
import type { FC } from "react";

interface OutputPanelProps {
  character: Character;
}

const OutputPanel: FC<OutputPanelProps> = ({ character }) => {
  return (
    <div className="flex-1/2">
      <CharacterSheet character={character} />
    </div>
  );
};

export default OutputPanel;
