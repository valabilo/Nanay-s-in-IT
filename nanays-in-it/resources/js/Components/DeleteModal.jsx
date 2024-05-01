import { Modal, Button } from 'react-bootstrap';

export default function DeleteModal({ children, show = false, closeable = true, onClose = () => { } }) {
    const handleClose = () => {
        if (closeable) {
            onClose();
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
}
