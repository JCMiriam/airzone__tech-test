import type { Meta, StoryObj } from '@storybook/react';
import { ZoneButton } from '@/components/ZoneButton/ZoneButton';

const meta: Meta<typeof ZoneButton> = {
  title: 'Components/ZoneButton',
  component: ZoneButton,
  tags: ['autodocs'],
  argTypes: {
    zoneName: {
      control: 'text',
      description: 'Nombre de la zona visible',
    },
    isOn: {
      control: 'boolean',
      description: 'Estado del sistema (encendido o apagado)',
    },
    currentTemperature: {
      control: { type: 'number', min: 0, max: 40, step: 0.1 },
      description: 'Temperatura actual de la zona',
    },
    targetTemperature: {
      control: { type: 'number', min: 0, max: 40, step: 0.1 },
      description: 'Temperatura objetivo (si está encendido)',
    },
    onClick: {
      action: 'zone clicked',
      description: 'Callback al pulsar la zona',
    },
    onToggle: {
      action: 'power toggled',
      description: 'Callback al pulsar el botón de encendido',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'El componente `ZoneButton` representa una zona interactiva con su estado térmico, nombre y botón de encendido/apagado.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ZoneButton>;

export const Default: Story = {
    args: {
        zoneName: 'Living Room',
        isOn: true,
        currentTemperature: 22,
        targetTemperature: 24,
    },
};

export const Cooling: Story = {
    args: {
        zoneName: 'Bedroom',
        isOn: true,
        currentTemperature: 26,
        targetTemperature: 21,
    },
};

export const Heating: Story = {
    args: {
        zoneName: 'Bathroom',
        isOn: true,
        currentTemperature: 19,
        targetTemperature: 23,
    },
};

export const Success: Story = {
    args: {
        zoneName: 'Office',
        isOn: true,
        currentTemperature: 22,
        targetTemperature: 22,
    },
};

export const Off: Story = {
    args: {
        zoneName: 'Guest Room',
        isOn: false,
        currentTemperature: 20,
        targetTemperature: 24,
    },
};
