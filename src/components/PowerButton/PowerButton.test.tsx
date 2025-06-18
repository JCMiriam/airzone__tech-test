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

    it('applies correct class when isOn is true', () => {
        const { container } = render(<PowerButton isOn={true} onToggle={() => {}} />);
        expect(container.firstChild).toHaveClass('on');
        expect(container.firstChild).not.toHaveClass('off');
    });

    it('applies correct class when isOn is false', () => {
        const { container } = render(<PowerButton isOn={false} onToggle={() => {}} />);
        expect(container.firstChild).toHaveClass('off');
        expect(container.firstChild).not.toHaveClass('on');
    });

    it('calls onToggle when clicked', () => {
        const onToggleMock = jest.fn();
        render(<PowerButton isOn={false} onToggle={onToggleMock} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(onToggleMock).toHaveBeenCalledTimes(1);
    });
});
