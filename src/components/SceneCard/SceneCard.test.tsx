import { render, screen } from '@testing-library/react';
import { SceneCard } from './SceneCard';
import type { IconName } from '@/types/icons';

describe('SceneCard', () => {
    const icon: IconName = 'cool';
    const name = 'Modo frío';

    it('renders correctly with icon and name', () => {
        render(<SceneCard icon={icon} name={name} />);

        const label = screen.getByText(name);
        expect(label).toBeInTheDocument();

        const svgIcon = screen.getByTestId('svg-icon');
        expect(svgIcon).toBeInTheDocument();
    });

    it('uses the correct SVG icon name', () => {
        render(<SceneCard icon="sunrise" name="Amanecer" />);
        const svgIcon = screen.getByTestId('svg-icon');
        expect(svgIcon).toBeInTheDocument();
    });
});
