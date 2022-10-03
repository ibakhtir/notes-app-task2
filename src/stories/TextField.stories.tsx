import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextField from "../app/components/common/forms/textField";
import "../index.css";

export default {
  title: "TextField",
  component: TextField,
  argTypes: {
    label: {
      type: "string",
      description: "Text field name"
    },
    type: {
      description: "Input types like text or number",
      options: ["text", "number"],
      defaultValue: "text",
      control: {
        type: "radio"
      }
    },
    name: {
      description: "Input name"
    },
    value: {
      description: "Current value of the input"
    },
    placeholder: {
      type: "string",
      description: "Placeholder text for the input",
      defaultValue: "Enter text..."
    },
    error: {
      type: "string",
      description: "Appears if the text is not valid"
    },
    onChange: {
      description: "Called when the user changes the input's value"
    }
  }
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});

export const withError = Template.bind({});
withError.args = {
  error: "Invalid Data"
};

export const withLabel = Template.bind({});
withLabel.args = {
  label: "Text Field"
};

export const NumberField = Template.bind({});
NumberField.args = {
  type: "number",
  placeholder: "Enter number..."
};
