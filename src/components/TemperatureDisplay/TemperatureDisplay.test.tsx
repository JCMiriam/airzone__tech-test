import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TemperatureDisplay } from './TemperatureDisplay';

describe('TemperatureDisplay', () => {
    it('renders current temperature', () => {
        render(
        <TemperatureDisplay
            currentTemperature={21.3}
            isOn={true}
            targetTemperature={21.3}
        />
        );
        expect(screen.getByText('21.3 ºC')).toBeInTheDocument();
    });

    it('shows heating status when isOn is true and current < target', () => {
        render(
        <TemperatureDisplay
            currentTemperature={20}
            targetTemperature={24}
            isOn={true}
        />
        );
        expect(screen.getByText('Heating to 24º')).toBeInTheDocument();
    });

    it('shows cooling status when isOn is true and current > target', () => {
        render(
        <TemperatureDisplay
            currentTemperature={26}
            targetTemperature={22}
            isOn={true}
        />
        );
        expect(screen.getByText('Cooling to 22º')).toBeInTheDocument();
    });

    it('shows success when isOn is true and current === target', () => {
        render(
        <TemperatureDisplay
            currentTemperature={23}
            targetTemperature={23}
            isOn={true}
        />
        );
        expect(screen.getByText('Success')).toBeInTheDocument();
    });

    it('shows no status when isOn is false', () => {
        render(
        <TemperatureDisplay
            currentTemperature={23}
            targetTemperature={25}
            isOn={false}
        />
        );
        expect(screen.queryByText(/Heating|Cooling|Success/)).not.toBeInTheDocument();
    });
});
