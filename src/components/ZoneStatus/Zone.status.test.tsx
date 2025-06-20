import { render, screen } from '@testing-library/react';
import { ZoneStatus } from './ZoneStatus';

describe('ZoneStatus', () => {
    it('should render "Heating to Xº" when status is heating', () => {
        render(<ZoneStatus status="heating" targetTemperature={22} />);
        expect(screen.getByText('Heating to 22º')).toBeInTheDocument();
    });

    it('should render "Cooling to Xº" when status is cooling', () => {
        render(<ZoneStatus status="cooling" targetTemperature={18} />);
        expect(screen.getByText('Cooling to 18º')).toBeInTheDocument();
    });

    it('should render "Success" when status is success', () => {
        render(<ZoneStatus status="success" />);
        expect(screen.getByText('Success')).toBeInTheDocument();
    });

    it('should render "Off" when status is off', () => {
        render(<ZoneStatus status="off" />);
        expect(screen.getByText('Off')).toBeInTheDocument();
    });
});
