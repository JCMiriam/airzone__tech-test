export interface PowerButtonProps {
    isOn: boolean;
    onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}
