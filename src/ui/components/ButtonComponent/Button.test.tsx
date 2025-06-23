import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonComponent } from './Button';

describe('ButtonComponent', () => {
    it('renders button with children text', () => {
        render(<ButtonComponent onClick={() => {}}>Click me</ButtonComponent>);
        expect(screen.getByRole('button')).toHaveTextContent('Click me');
    });

    it('triggers onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<ButtonComponent onClick={handleClick}>Click me</ButtonComponent>);

        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('accepts and applies a className', () => {
        render(
        <ButtonComponent onClick={() => {}} className="custom-class">
            Click me
        </ButtonComponent>
        );
        expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('renders with aria-label if provided', () => {
        render(
        <ButtonComponent onClick={() => {}} aria-label="my-button">
            A11y
        </ButtonComponent>
        );
        expect(screen.getByLabelText('my-button')).toBeInTheDocument();
    });
});
