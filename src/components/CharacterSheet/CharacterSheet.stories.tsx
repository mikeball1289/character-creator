import type { Meta, StoryObj } from "@storybook/react";

import CharacterSheet from "./CharacterSheet";
import { characterDetail } from "@/builder/characterDetails";

const meta = {
  title: "Components/CharacterSheet",
  component: CharacterSheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    character: characterDetail.blank,
  },
} satisfies Meta<typeof CharacterSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Wizard: Story = {
  args: {
    character: characterDetail.wizard,
  },
};

export const AxeFighter: Story = {
  args: {
    character: characterDetail.axe_fighter,
  },
};

export const OldWizard: Story = {
  args: {
    character: characterDetail.old_wizard,
  },
};
