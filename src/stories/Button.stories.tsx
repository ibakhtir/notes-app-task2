import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../app/components/common/button";
import "../index.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      description: "Button types like button or submit"
    },
    children: {
      name: "label",
      description: "Content inside the button",
      defaultValue: "Button"
    },
    size: {
      description: "Button size"
    },
    color: {
      description: "Button color",
      options: ["bg-add", "bg-save", "bg-cancel"],
      defaultValue: "bg-add",
      control: {
        type: "radio"
      }
    },
    restStyle: {
      name: "style",
      description: "Button style",
      options: ["standard", "uppercase", "rounded-full"],
      defaultValue: "standard",
      control: {
        type: "radio"
      }
    },
    disabled: {
      description: "Whether the button is disabled"
    },

    onClick: {
      description: "Called when the user clicks the button"
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Large = Template.bind({});
Large.args = {
  size: "btn-large",
  children: "Large Button"
};

export const Small = Template.bind({});
Small.args = {
  size: "btn-small",
  children: "Small Button"
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  restStyle: "uppercase",
  children: "Uppercase Button"
};

export const Rounded = Template.bind({});
Rounded.args = {
  restStyle: "rounded-full",
  children: "Rounded Button"
};
