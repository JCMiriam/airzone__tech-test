import { render, screen } from '@testing-library/react';
import { ZoneBackground } from './ZoneBackground';
import type { ZoneStatus } from '@/types/zoneStatus';

import * as useZoneStatusHook from '@/components/ZoneStatus/useZoneStatus';
import styles from './ZoneBackground.module.scss';

describe('ZoneBackground', () => {
    const defaultProps = {
        isOn: true,
        currentTemperature: 22,
        targetTemperature: 20,
    };

    const mockUseZoneStatus = (status: ZoneStatus) => {
        jest.spyOn(useZoneStatusHook, 'useZoneStatus').mockReturnValue(status);
    };

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('renders correct background class for "cooling"', () => {
        mockUseZoneStatus('cooling');
        render(<ZoneBackground {...defaultProps} />);

        const bg = screen.getByTestId('zone-bg-wrapper');
        const coolingDiv = bg.querySelector(`.${styles.cooling}`);
        expect(coolingDiv).toHaveClass(styles.active);

        expect(screen.getByTestId('svg-icon')).toBeInTheDocument();
    });

    it('renders correct background class for "heating"', () => {
        mockUseZoneStatus('heating');
        render(<ZoneBackground {...defaultProps} />);

        const bg = screen.getByTestId('zone-bg-wrapper');
        const heatingDiv = bg.querySelector(`.${styles.heating}`);
        expect(heatingDiv).toHaveClass(styles.active);

        expect(screen.getByTestId('svg-icon')).toBeInTheDocument();
    });

    it('renders correct background class for "success" with no icon', () => {
        mockUseZoneStatus('success');
        render(<ZoneBackground {...defaultProps} />);

        const bg = screen.getByTestId('zone-bg-wrapper');
        const successDiv = bg.querySelector(`.${styles.success}`);
        expect(successDiv).toHaveClass(styles.active);
        expect(screen.queryByTestId('svg-icon')).not.toBeInTheDocument();
    });

    it('renders correct background class for "off" with no icon', () => {
        mockUseZoneStatus('off');
        render(<ZoneBackground {...defaultProps} />);

        const bg = screen.getByTestId('zone-bg-wrapper');
        const offDiv = bg.querySelector(`.${styles.off}`);
        expect(offDiv).toHaveClass(styles.active);
        expect(screen.queryByTestId('svg-icon')).not.toBeInTheDocument();
    });
});
