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
        currentTemperature: 22.5,
        zoneStatus: 'success',
    },
};

export const Heating: Story = {
    args: {
        currentTemperature: 20,
        targetTemperature: 24,
        zoneStatus: 'heating',
    },
};

export const Cooling: Story = {
    args: {
        currentTemperature: 26,
        targetTemperature: 22,
        zoneStatus: 'cooling',
    },
};

export const Success: Story = {
    args: {
        currentTemperature: 23,
        targetTemperature: 23,
        zoneStatus: 'success',
    },
};
