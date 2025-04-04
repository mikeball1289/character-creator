import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Dropdown from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    options: [
      {
        value: "red",
        displayName: "Maroon",
      },
      {
        value: "blue",
        displayName: "Azure",
      },
      {
        value: "green",
        displayName: "Chartreuse",
      },
    ],
    label: "Favorite color:",
    onOptionSelect: fn(),
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
