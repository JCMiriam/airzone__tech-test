import type { Meta, StoryObj } from '@storybook/react';
import { TemperatureDisplay } from '@/components/TemperatureDisplay/TemperatureDisplay';

const meta: Meta<typeof TemperatureDisplay> = {
  title: 'Components/TemperatureDisplay',
  component: TemperatureDisplay,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TemperatureDisplay>;

export const Default: Story = {
    args: {
        current: 22.5,
    },
};

export const Heating: Story = {
    args: {
        current: 20,
        target: 24,
        isHeating: true,
    },
};

export const Cooling: Story = {
    args: {
        current: 26,
        target: 22,
        isCooling: true,
    },
};

export const IdleWithTarget: Story = {
    args: {
        current: 23,
        target: 24,
    },
};
