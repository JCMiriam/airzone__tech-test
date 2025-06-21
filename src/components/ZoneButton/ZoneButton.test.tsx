import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ZoneButton } from './ZoneButton';

describe('ZoneButton', () => {
    const mockOnClick = jest.fn();
    const mockOnToggle = jest.fn();

    const defaultProps = {
        zoneName: 'Living Room',
        isOn: true,
        currentTemperature: 22,
        targetTemperature: 24,
        zoneStatus: 'heating' as const,
        onClick: mockOnClick,
        onToggle: mockOnToggle,
    };

    beforeEach(() => {
        mockOnClick.mockClear();
        mockOnToggle.mockClear();
    });

    it('renders all components correctly', () => {
        render(<ZoneButton {...defaultProps} />);
        expect(screen.getByText('Heating to 24º')).toBeInTheDocument();
        expect(screen.getByText(/22\s*º/)).toBeInTheDocument();
        expect(screen.getByText('Living Room')).toBeInTheDocument();
    });

    it('calls onClick when main container is clicked', () => {
        render(<ZoneButton {...defaultProps} />);
        fireEvent.click(screen.getByTestId('zone-button'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick when Enter key is pressed', () => {
        render(<ZoneButton {...defaultProps} />);
        fireEvent.keyDown(screen.getByTestId('zone-button'), { key: 'Enter' });
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick when Space key is pressed', () => {
        render(<ZoneButton {...defaultProps} />);
        fireEvent.keyDown(screen.getByTestId('zone-button'), { key: ' ' });
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('calls onToggle only when power button is clicked', () => {
        render(<ZoneButton {...defaultProps} />);
        const powerBtn = screen.getByRole('button', { name: /Turn off/i });
        fireEvent.click(powerBtn);
        expect(mockOnToggle).toHaveBeenCalledTimes(1);
        expect(mockOnClick).not.toHaveBeenCalled();
    });
});
