import { computeStatus } from './utils/computeStatus';

describe('computeStatus', () => {
    it('returns "off" if isOn is false', () => {
        expect(computeStatus(false, 24, 22)).toBe('off');
    });

    it('returns "cooling" if current > target', () => {
        expect(computeStatus(true, 26, 24)).toBe('cooling');
    });

    it('returns "heating" if current < target', () => {
        expect(computeStatus(true, 20, 22)).toBe('heating');
    });

    it('returns "success" if current === target', () => {
        expect(computeStatus(true, 22, 22)).toBe('success');
    });
});
