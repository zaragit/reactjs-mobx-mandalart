import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Camera from ".";
import PlanBlock from "../PlanBlock";
import { Plan } from "../../store";

export default {
  title: "Components/Camera",
  component: Camera,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Camera>;

const Template: ComponentStory<typeof Camera> = (args) => <Camera {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  fileName: "만다라트",
  children: <PlanBlock plan={new Plan()} />,
};
