import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlanBlock from ".";
import { Plan } from "../../store";

export default {
  title: "Components/PlanBlock",
  component: PlanBlock,
  argTypes: {
    plan: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof PlanBlock>;

const Template: ComponentStory<typeof PlanBlock> = (args) => (
  <PlanBlock {...args} />
);

export const Basic = Template.bind({});
Basic.args = { plan: new Plan(), size: 300, margin: 16 };
