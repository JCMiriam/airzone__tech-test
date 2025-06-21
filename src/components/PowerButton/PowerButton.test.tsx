import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { PowerButton } from './PowerButton';

describe('PowerButton', () => {
    it('renders with the power icon', () => {
        render(<PowerButton isOn={false} onToggle={() => {}} />);
        const button = screen.getByRole('button');
        const icon = screen.getByTestId('svg-icon');
        expect(button).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });

    it('calls onToggle when clicked', () => {
        const onToggleMock = jest.fn();
        render(<PowerButton isOn={false} onToggle={onToggleMock} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(onToggleMock).toHaveBeenCalledTimes(1);
    });
});
