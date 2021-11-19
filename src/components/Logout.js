import { Button, Modal } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { getLogout } from '../api/getLogout';
const Logout = () => {


    const [show, setShow] = useState(false);

    const [token, setToken] = useState({
        accessToken: localStorage.getItem("token"),
        refeshToken: localStorage.getItem("refeshToken")
    })

    const [isLogout, setIsLogout] = useState(false)

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleLogout = async () =>{
        setShow(true)
        let data = await getLogout(token)
        if(data == null){
            console.log("logout cancel")
        }else if (data.message === "SUCCESS_LOGOUT_USER"){
            localStorage.removeItem("jwtToken")
            setIsLogout(true);
        }
    }

    return (
        <>
            <Button variant="default" onClick={() => handleShow()}>
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
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => handleLogout()}>
                        Log out
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default Logout