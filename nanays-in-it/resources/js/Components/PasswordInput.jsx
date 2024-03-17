import React, { forwardRef, useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const PasswordInput = forwardRef(({ type = 'text', className = '', ...props }, ref) => {


    return (
        < Form.Control
            {...props}
            type={type}
            className={
                '' +
                className}
            ref={ref}
        />
    );
});

export default PasswordInput;
