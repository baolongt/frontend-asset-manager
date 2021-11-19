import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

const ChangePass = () => {

    const [confirm, setConfirm] = useState({
        password: "",
        newPassword: ""
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="default" onClick={handleShow}>
                Change password
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><p class="h3 text-danger">Change password</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <form className="flex flex-column mx-auto bg-white p-3">
                            
                            <div>
                                <label className="form-label text-secondary" htmlFor="password">
                                    Current password
                                </label>
                                <input
                                    class="form-control"
                                    onChange={(e) => setConfirm({ ...confirm, password: e.target.value })}
                                    type="password"
                                    value={confirm.password}
                                    id="password"
                                />

                            </div>
                            <div className="flex flex-column mt-2">
                                <label className="form-label text-secondary" htmlFor="password">
                                    New password
                                </label>
                                <input
                                    class="form-control"
                                    onChange={(e) => setConfirm({ ...confirm, newPassword: e.target.value })}
                                    type="password"
                                    value={confirm.newPassword}
                                    id="newPassword"
                                />
                            </div>
                        </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                       Cancel
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Change password
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ChangePass
