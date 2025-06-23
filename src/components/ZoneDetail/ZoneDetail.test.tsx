import { render, screen, fireEvent } from '@testing-library/react';
import { ZoneDetail } from './ZoneDetail';

const updateZone = jest.fn();
const mockZones = [
    {
        id: 'zone1',
        name: 'Living Room',
        temperature: 22,
        target: 24,
        status: 'cooling',
        isOn: true,
    },
];

jest.mock('@/ui/context/ZonesContext/useZones', () => ({
    useZones: () => ({
        zones: mockZones,
        updateZone,
    }),
}));

describe('ZoneDetail', () => {
    beforeEach(() => {
        updateZone.mockClear();
    });

    it('renders the zone details correctly', () => {
        render(<ZoneDetail zoneId="zone1" onClose={jest.fn()} />);
        expect(screen.getByText(/Living Room/i)).toBeInTheDocument();
        expect(screen.getByText('24°')).toBeInTheDocument();

        const buttons = screen.getAllByRole('button');
        const powerButton = buttons.find((btn) =>
            btn.className.includes('powerButton')
        );
        expect(powerButton).toBeTruthy();
    });

    it('calls onClose when back button is clicked', () => {
        const handleClose = jest.fn();
        render(<ZoneDetail zoneId="zone1" onClose={handleClose} />);
        fireEvent.click(screen.getByText(/Back/i));
        expect(handleClose).toHaveBeenCalled();
    });

    it('calls updateZone when temperature is changed', () => {
        render(<ZoneDetail zoneId="zone1" onClose={jest.fn()} />);
        fireEvent.click(screen.getByLabelText(/Increase temperature/i));
        expect(updateZone).toHaveBeenCalledWith('zone1', { target: 25 });
    });
});
