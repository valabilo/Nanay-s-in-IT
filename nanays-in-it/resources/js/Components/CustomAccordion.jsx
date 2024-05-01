import Accordion from 'react-bootstrap/Accordion';

export default function CustomAccordion({ className, faqs }) {
    return (
        <Accordion flush className={`py-3 ${className}`}>
            {faqs.data.map((faq) => (
                <Accordion.Item className='mb-1 border-3' key={faq.id} eventKey={faq.id.toString()}>
                    <Accordion.Header className='h2 fw-bold'>{faq.question}</Accordion.Header>
                    <Accordion.Body className='bg-body-tertiary text-muted'>
                        {faq.answer}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}
