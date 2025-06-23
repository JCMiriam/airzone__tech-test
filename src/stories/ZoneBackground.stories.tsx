import type { Meta, StoryObj } from '@storybook/react-vite';
import { ZoneBackground } from '@/components/ZoneBackground/ZoneBackground';

const meta: Meta<typeof ZoneBackground> = {
    title: 'Components/ZoneBackground',
    component: ZoneBackground,
    tags: ['autodocs'],
    argTypes: {
        isOn: { control: 'boolean' },
        currentTemperature: { control: { type: 'number', min: 10, max: 40 } },
        targetTemperature: { control: { type: 'number', min: 10, max: 40 } },
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ZoneBackground>;

export const Playground: Story = {
    args: {
        isOn: true,
        currentTemperature: 22,
        targetTemperature: 22,
    },
};

export const Success: Story = {
    args: {
        isOn: true,
        currentTemperature: 22,
        targetTemperature: 22,
    },
};

export const Cooling: Story = {
    args: {
        isOn: true,
        currentTemperature: 24,
        targetTemperature: 22,
    },
};

export const Heating: Story = {
    args: {
        isOn: true,
        currentTemperature: 20,
        targetTemperature: 22,
    },
};

export const Off: Story = {
    args: {
        isOn: false,
        currentTemperature: 22,
        targetTemperature: 22,
    },
};
