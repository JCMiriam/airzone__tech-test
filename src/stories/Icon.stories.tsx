import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../ui/components/IconComponent/Icon';
import type { IconName } from '@/types/icons';

const meta: Meta<typeof Icon> = {
    title: 'UI/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        name: {
        control: 'select',
        options: [
            'bag',
            'cool',
            'heat',
            'night',
            'power',
            'sofa',
            'sunrise',
            'leaving',
        ] satisfies IconName[],
        },
        width: { control: { type: 'number', min: 8, max: 128, step: 4 } },
        height: { control: { type: 'number', min: 8, max: 128, step: 4 } },
    },
    args: {
        name: 'power',
        width: 32,
        height: 32,
    },
    };

    export default meta;
    type Story = StoryObj<typeof Icon>;

    export const Playground: Story = {};

    export const AllIcons: Story = {
    render: (args) => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {(
            [
            'bag',
            'cool',
            'heat',
            'night',
            'power',
            'sofa',
            'sunrise',
            'leaving',
            ] as IconName[]
        ).map((icon) => (
            <div key={icon} style={{ textAlign: 'center' }}>
            <Icon name={icon} width={args.width} height={args.height} />
            <div style={{ fontSize: 12, marginTop: 4 }}>{icon}</div>
            </div>
        ))}
        </div>
    ),
    args: {
        width: 32,
        height: 32,
    },
};
