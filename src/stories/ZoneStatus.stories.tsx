import type { Meta, StoryObj } from '@storybook/react';
import { ZoneStatus } from '@/components/ZoneStatus/ZoneStatus';

const meta: Meta<typeof ZoneStatus> = {
    title: 'Components/ZoneStatus',
    component: ZoneStatus,
    argTypes: {
        status: {
            control: { type: 'select' },
            options: ['off', 'heating', 'cooling', 'success'],
        },
            targetTemperature: {
            control: { type: 'number' },
        },
    },
};
export default meta;

type Story = StoryObj<typeof ZoneStatus>;

export const Playground: Story = {
    args: {
        status: 'heating',
        targetTemperature: 22,
    },
};

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <ZoneStatus status="off" />
        <ZoneStatus status="heating" targetTemperature={22} />
        <ZoneStatus status="cooling" targetTemperature={18} />
        <ZoneStatus status="success" />
    </div>
  ),
};
