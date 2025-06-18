import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TemperatureDisplay } from './TemperatureDisplay';

describe('TemperatureDisplay', () => {
    it('renders current temperature', () => {
        render(
            <TemperatureDisplay
                currentTemperature={21.3}
                zoneStatus="success"
            />
        );
        expect(screen.getByText('21.3 ºC')).toBeInTheDocument();
    });

    it('shows heating status when zoneStatus is "heating"', () => {
        render(
            <TemperatureDisplay
                currentTemperature={20}
                targetTemperature={24}
                zoneStatus="heating"
            />
        );
        expect(screen.getByText('Heating to 24º')).toBeInTheDocument();
    });

    it('shows cooling status when zoneStatus is "cooling"', () => {
        render(
            <TemperatureDisplay
                currentTemperature={26}
                targetTemperature={22}
                zoneStatus="cooling"
            />
        );
        expect(screen.getByText('Cooling to 22º')).toBeInTheDocument();
    });

    it('shows success status when zoneStatus is "success"', () => {
        render(
            <TemperatureDisplay
                currentTemperature={23}
                targetTemperature={23}
                zoneStatus="success"
            />
        );
        expect(screen.getByText('Success')).toBeInTheDocument();
    });
});
