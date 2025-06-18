import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
import type { IconName } from '@/types/icons';

describe('Icon component', () => {
  const iconNames: IconName[] = [
    'bag', 'cool', 'heat', 'leaving', 'night', 'power', 'sofa', 'sunrise',
  ];

  it.each(iconNames)('renders the %s icon correctly', (name) => {
    render(<Icon name={name} width={24} height={24} />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '24');
    expect(icon).toHaveAttribute('height', '24');
  });

  it('renders null if an unknown icon name is passed (simulated)', () => {
    const { container } = render(
      <Icon name={'unknown' as IconName} width={24} height={24} />
    );
    expect(container.firstChild).toBeNull();
  });
});
