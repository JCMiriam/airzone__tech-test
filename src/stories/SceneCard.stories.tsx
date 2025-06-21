import { SceneCard } from '@/components/SceneCard/SceneCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SceneCard> = {
    title: 'Components/SceneCard',
    component: SceneCard,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: ['bag', 'cool', 'heat', 'leaving', 'night', 'power', 'sofa', 'sunrise'],
        },
            name: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof SceneCard>;

export const Playground: Story = {
    args: {
        icon: 'cool',
        name: 'Modo frío',
    },
};

export const AllVariants: Story = {
    render: () => (
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {(['bag', 'cool', 'heat', 'leaving', 'night', 'power', 'sofa', 'sunrise'] as const).map((icon) => (
                <SceneCard key={icon} icon={icon} name={icon.charAt(0).toUpperCase() + icon.slice(1)} />
            ))}
        </div>
    ),
};
