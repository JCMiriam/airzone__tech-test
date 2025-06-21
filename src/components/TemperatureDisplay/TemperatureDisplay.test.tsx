import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TemperatureDisplay } from './TemperatureDisplay';

describe('TemperatureDisplay', () => {
    it('renders the current temperature with one decimal', () => {
        render(<TemperatureDisplay currentTemperature={21.3} isOn={true} />);
        expect(screen.getByText('21º')).toBeInTheDocument();
    });

    it('rounds down correctly', () => {
        render(<TemperatureDisplay currentTemperature={21.27} isOn={true} />);
        expect(screen.getByText('21º')).toBeInTheDocument();
    });

    it('rounds up correctly', () => {
        render(<TemperatureDisplay currentTemperature={21.78} isOn={true} />);
        expect(screen.getByText('22º')).toBeInTheDocument();
    });
});

