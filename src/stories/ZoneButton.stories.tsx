import type { Meta, StoryObj } from '@storybook/react';
import { ZoneButton } from '@/components/ZoneButton/ZoneButton';

const meta: Meta<typeof ZoneButton> = {
    title: 'Components/ZoneButton',
    component: ZoneButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ZoneButton>;

export const Default: Story = {
    args: {
        zoneName: 'Living Room',
        isOn: true,
        currentTemperature: 22,
        targetTemperature: 24,
        zoneStatus: 'heating',
        onClick: () => console.log('Zone clicked'),
        onToggle: () => console.log('Power toggled'),
    },
};

export const Cooling: Story = {
    args: {
        zoneName: 'Bedroom',
        isOn: false,
        currentTemperature: 26,
        targetTemperature: 21,
        zoneStatus: 'cooling',
        onClick: () => console.log('Zone clicked'),
        onToggle: () => console.log('Power toggled'),
    },
};

export const SuccessState: Story = {
    args: {
        zoneName: 'Office',
        isOn: true,
        currentTemperature: 21.5,
        zoneStatus: 'success',
        onClick: () => console.log('Zone clicked'),
        onToggle: () => console.log('Power toggled'),
    },
};
