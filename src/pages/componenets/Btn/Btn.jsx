/* eslint-disable react/prop-types */
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Btn = ({
  btnLabel = "clickme",
  clickHandler,
  disabled = false,
  isDeleteBtn = false,
  multiDeleteMsg = "Are you sure want to delete an item?",
  multiDeleteBtnLabel = "Delete",
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        className="ms-3"
        onClick={(isDeleteBtn && handleShow) || (!isDeleteBtn && clickHandler)}
        disabled={disabled}
      >
        {btnLabel}
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>{multiDeleteMsg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={clickHandler}>
            {multiDeleteBtnLabel}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Btn;
