import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
const Logout = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="default" onClick={handleShow}>
                Log out
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><p class="h3 text-danger">Are you sure</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to log out?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Log out
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default Logout