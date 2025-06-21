import type { Meta, StoryObj } from '@storybook/react';
import { TemperatureDisplay } from '@/components/TemperatureDisplay/TemperatureDisplay';

const meta: Meta<typeof TemperatureDisplay> = {
    title: 'Components/TemperatureDisplay',
    component: TemperatureDisplay,
    tags: ['autodocs'],
    argTypes: {
        currentTemperature: {
        control: 'number',
        description: 'Temperatura actual de la zona',
        },
        targetTemperature: {
        control: 'number',
        description: 'Temperatura objetivo (usada para determinar heating/cooling/success)',
        },
        isOn: {
        control: 'boolean',
        description: 'Estado de encendido/apagado de la zona',
        },
    },
    parameters: {
        docs: {
        description: {
            component:
            'Muestra la temperatura actual y el estado de la zona (heating, cooling, success). El estado se calcula dinámicamente a partir de las props.',
        },
        },
    },
};

export default meta;

type Story = StoryObj<typeof TemperatureDisplay>;

export const Off: Story = {
    name: 'Zona apagada',
    args: {
        currentTemperature: 22.5,
        targetTemperature: 24,
        isOn: false,
    },
};

export const Heating: Story = {
    name: 'Calentando',
    args: {
        currentTemperature: 20,
        targetTemperature: 24,
        isOn: true,
    },
};

export const Cooling: Story = {
    name: 'Enfriando',
    args: {
        currentTemperature: 26,
        targetTemperature: 22,
        isOn: true,
    },
};

export const Success: Story = {
    name: 'Temperatura alcanzada',
    args: {
        currentTemperature: 23,
        targetTemperature: 23,
        isOn: true,
    },
};
