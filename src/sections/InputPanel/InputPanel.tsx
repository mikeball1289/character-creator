import type { Step } from "@/builder/builderTypes";
import Dropdown from "@/components/Dropdown/Dropdown";
import { useInputs } from "@/data/useInputs";
import type { FC } from "react";

interface InputPanelProps {
  steps: Step[];
}

const InputPanel: FC<InputPanelProps> = ({ steps }) => {
  const { setInputs } = useInputs();

  return (
    <div className="flex-1/2 flex flex-col gap-2">
      {steps.map((step, i) => {
        return (
          <Dropdown
            key={step.label}
            label={step.label}
            options={step.options}
            onOptionSelect={(val) =>
              setInputs((inputs) => [...inputs.slice(0, i), val])
            }
          />
        );
      })}
    </div>
  );
};

export default InputPanel;
