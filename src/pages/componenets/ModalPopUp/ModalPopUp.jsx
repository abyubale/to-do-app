import { Button, Modal } from "react-bootstrap";
const ModalPopUp = ({
  multiDeleteMsg = "Are you sure want to delete an item?",
  multiDeleteBtnLabel = "Delete",
  clickHandler,
  toHandleShow,
  showModal,
}) => {
  const DeleteBtnHandler = () => {
    toHandleShow();
    clickHandler();
  };
  return (
    <Modal
      show={showModal}
      onHide={toHandleShow}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>{multiDeleteMsg}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toHandleShow}>
          Close
        </Button>
        <Button variant="primary" onClick={DeleteBtnHandler}>
          {multiDeleteBtnLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPopUp;
