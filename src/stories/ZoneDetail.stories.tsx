import type { Meta, StoryObj } from '@storybook/react';
import { ZoneDetail } from '@/components/ZoneDetail/ZoneDetail';
import { ZonesContext } from '@/ui/context/ZonesContext/ZonesContext';
import type { Zone, ZonesContextType } from '@/ui/context/ZonesContext/ZonesContext.types';

const createMockContext = (zone: Zone): ZonesContextType => ({
    zones: [zone],
    updateZone: (...args) => {
        console.log('updateZone called with:', ...args);
    },
});

const meta: Meta<typeof ZoneDetail> = {
    title: 'Components/ZoneDetail',
    component: ZoneDetail,
    decorators: [
        (Story, context) => {
        const zone: Zone = {
            id: context.args.zoneId,
            name: context.parameters.mockName ?? 'Zona',
            temperature: context.parameters.mockTemp ?? 20,
            target: context.parameters.mockTarget ?? 22,
            status: context.parameters.mockStatus ?? 'off',
        };

        return (
            <ZonesContext.Provider value={createMockContext(zone)}>
            <Story />
            </ZonesContext.Provider>
        );
        },
    ],
    parameters: {
        docs: {
        description: {
            component:
            'El componente `ZoneDetail` muestra los detalles de una zona térmica, su temperatura, estado y permite controlarla.',
        },
        },

        mockName: 'Living Room',
        mockTemp: 22,
        mockTarget: 24,
        mockStatus: 'cooling',
    },

    argTypes: {
        zoneId: {
        control: false,
        },
        onClose: {
        action: 'Closed',
        description: 'Callback al cerrar la vista de detalle',
        },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ZoneDetail>;

export const Default: Story = {
    args: {
        zoneId: 'zone1',
        onClose: () => console.log('Closed'),
    },
};

export const Heating: Story = {
    ...Default,
    parameters: {
        mockName: 'Bathroom',
        mockTemp: 19,
        mockTarget: 23,
        mockStatus: 'heating',
    },
};

export const Cooling: Story = {
    ...Default,
    parameters: {
        mockName: 'Bedroom',
        mockTemp: 26,
        mockTarget: 21,
        mockStatus: 'cooling',
    },
};

export const Success: Story = {
    ...Default,
    parameters: {
        mockName: 'Office',
        mockTemp: 22,
        mockTarget: 22,
        mockStatus: 'success',
    },
};

export const Off: Story = {
    ...Default,
    parameters: {
        mockName: 'Guest Room',
        mockTemp: 20,
        mockTarget: 24,
        mockStatus: 'off',
    },
};
