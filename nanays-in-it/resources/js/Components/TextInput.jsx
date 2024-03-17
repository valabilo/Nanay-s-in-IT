import { forwardRef, useRef } from 'react';
import { Form } from 'react-bootstrap';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    return (
        <Form.Control
            {...props}
            type={type}
            className={
                '' +
                className
            }
            ref={input}
        />
    );
});
