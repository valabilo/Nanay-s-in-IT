import { Form } from "react-bootstrap";

export default function Checkbox({ className = '', ...props }) {
    return (
        // <input

        //     type="checkbox"
        //     className={
        //         'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
        //         className
        //     }
        // />
        <Form.Check // prettier-ignore
            {...props}
            className={
                '' +
                className
            }
        />
    );
}
