import type { Meta, StoryObj } from '@storybook/react';
import { ZoneName } from '@/components/ZoneName/ZoneName';

const meta: Meta<typeof ZoneName> = {
  title: 'Components/ZoneName',
  component: ZoneName,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ZoneName>;

export const Default: Story = {
    args: {
        name: 'Living Room',
    },
};

export const LongName: Story = {
    args: {
        name: 'Main Bedroom with Balcony and Ensuite',
    },
};
