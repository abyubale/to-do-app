import { Modal } from "react-bootstrap";

const modal = () => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
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
  );
};

export default modal;
