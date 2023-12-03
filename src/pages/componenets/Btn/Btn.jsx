/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalPopUp from "../ModalPopUp/ModalPopUp";

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

  const handleShow = () => setShow(true);

  const toHandleShow = () => setShow(false);
  return (
    <>
      <Button
        variant="primary"
        className="ms-3"
        onClick={(!isDeleteBtn && clickHandler) || handleShow}
        disabled={disabled}
      >
        {btnLabel}
      </Button>

      <ModalPopUp
        clickHandler={clickHandler}
        multiDeleteMsg={multiDeleteMsg}
        multiDeleteBtnLabel={multiDeleteBtnLabel}
        toHandleShow={toHandleShow}
        showModal={show}
      />
    </>
  );
};
export default Btn;
