import './MyLabel.css';

interface MyLabelProps {
    /**
     * The label to display
     */
    label: string;
    /**
     * The size of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Whether the label should be all caps
     */
    allCaps?: boolean;

    /**
     * The color of the label
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

    /**
     * The font color of the label
     */
    fontColor?: string;
}

export const MyLabel = ({
    label,
    size = 'normal',
    allCaps = false,
    color = 'text-primary',
    fontColor,
}: MyLabelProps) => {
    return (
        <span className={`label ${size} ${color}`} style={{ color: fontColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};
