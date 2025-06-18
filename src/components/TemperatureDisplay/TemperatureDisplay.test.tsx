import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TemperatureDisplay } from './TemperatureDisplay';

describe('TemperatureDisplay', () => {
    it('renders current temperature', () => {
        render(<TemperatureDisplay current={21.3} />);
        expect(screen.getByText('21.3 ºC')).toBeInTheDocument();
    });

    it('shows heating status when isHeating is true', () => {
        render(<TemperatureDisplay current={20} target={24} isHeating />);
        expect(screen.getByText('Heating to 24º')).toBeInTheDocument();
    });

    it('shows cooling status when isCooling is true', () => {
        render(<TemperatureDisplay current={26} target={22} isCooling />);
        expect(screen.getByText('Cooling to 22º')).toBeInTheDocument();
    });

    it('does not show status if neither heating nor cooling', () => {
        render(<TemperatureDisplay current={22} target={23} />);
        expect(screen.queryByText(/Heating|Cooling/)).not.toBeInTheDocument();
    });
});
