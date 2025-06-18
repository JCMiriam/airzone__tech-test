import { render, screen } from '@testing-library/react';
import { ZoneName } from './ZoneName';

describe('ZoneName', () => {
    it('renders the zone name correctly', () => {
        render(<ZoneName name="Living Room" />);
        const heading = screen.getByRole('heading', { name: /Living Room/i });
        expect(heading).toBeInTheDocument();
    });
});
