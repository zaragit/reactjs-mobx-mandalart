import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GoalBlock from ".";
import { Goal } from "../../store";

export default {
  title: "Components/GoalBlock",
  component: GoalBlock,
  argTypes: {
    goal: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof GoalBlock>;

const Template: ComponentStory<typeof GoalBlock> = (args) => (
  <GoalBlock {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  goal: new Goal(""),
  size: 200,
  placeholder: "ContentEditable",
  margin: 16,
  backgroundColor: "rgba(255, 0, 0, 0.25)",
};
