import { Button } from "react-bootstrap";

export default function SecondaryButton({ variant = 'variant', type = 'button', className = '', disabled, children, ...props }) {
    return (
        <Button
            {...props}
            type={type}
            variant={variant}
            className={
                `${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
