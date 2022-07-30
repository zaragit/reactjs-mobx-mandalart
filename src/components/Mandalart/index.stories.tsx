import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Mandalart from ".";
import { Store } from "../../store";

export default {
  title: "Components/Mandalart",
  component: Mandalart,
  argTypes: {
    store: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Mandalart>;

const Template: ComponentStory<typeof Mandalart> = (args) => (
  <Mandalart {...args} />
);

export const Basic = Template.bind({});
Basic.args = { store: new Store(), size: 900, margin: 16 };
