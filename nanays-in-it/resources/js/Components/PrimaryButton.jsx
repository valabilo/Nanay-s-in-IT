import { Button } from "react-bootstrap";

export default function PrimaryButton({ size = '', className = '', disabled, children, ...props }) {
    return (
        <Button
            {...props}
            className={
                `btn-primary ${disabled && 'opacity-25'
                } ` + className
            }
            size={size}
            type="submit"
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
