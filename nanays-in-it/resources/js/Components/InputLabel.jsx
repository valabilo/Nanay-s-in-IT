import { Form } from "react-bootstrap";

export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <Form.Label {...props} className={`` + className}>
            {value ? value : children}
        </Form.Label>
    );
}
