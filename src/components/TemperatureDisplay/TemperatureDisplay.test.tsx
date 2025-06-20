import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TemperatureDisplay } from './TemperatureDisplay';

describe('TemperatureDisplay', () => {
    it('renders the current temperature with one decimal', () => {
        render(<TemperatureDisplay currentTemperature={21.3} />);
        expect(screen.getByText('21.3 ºC')).toBeInTheDocument();
    });

    it('rounds down correctly', () => {
        render(<TemperatureDisplay currentTemperature={21.27} />);
        expect(screen.getByText('21.3 ºC')).toBeInTheDocument();
    });

    it('rounds up correctly', () => {
        render(<TemperatureDisplay currentTemperature={21.78} />);
        expect(screen.getByText('21.8 ºC')).toBeInTheDocument();
    });
});
