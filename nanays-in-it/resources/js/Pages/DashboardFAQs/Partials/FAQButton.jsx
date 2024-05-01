// DeleteFAQButton.jsx

import React from 'react';
import { Button } from 'react-bootstrap';

const FAQButton = ({ icon, onClick }) => {


    return (
        <Button variant="link" className='p-0' onClick={onClick}>
            {icon}
        </Button>
    );
};
export default FAQButton;
