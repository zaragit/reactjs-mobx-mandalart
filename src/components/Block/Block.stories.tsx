import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Block from ".";

export default {
  title: "Components/Block",
  component: Block,
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = (args) => <Block {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: 200,
  placeholder: "ContentEditable",
  margin: 16,
};
