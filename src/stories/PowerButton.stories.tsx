import { useState } from 'react';
import { PowerButton } from '@/components/PowerButton/PowerButton';
import type { PowerButtonProps } from '@/components/PowerButton/PowerButton.types';
import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof PowerButton> = {
  title: 'Components/PowerButton',
  component: PowerButton,
  tags: ['autodocs'],
  argTypes: {
    isOn: { control: 'boolean' },
    onToggle: { action: 'onToggle' },
    className: { control: 'text' }
  }
};

export default meta;

const Template: StoryFn<PowerButtonProps> = (args) => <PowerButton {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  isOn: false
};
