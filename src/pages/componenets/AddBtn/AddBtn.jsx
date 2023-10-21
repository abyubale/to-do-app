import { Button } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const AddBtn = ({ btnLabel = "clickme", clickHandler, disabled = false }) => {
  return (
    <Button
      variant="primary"
      className="ms-3"
      onClick={clickHandler}
      disabled={disabled}
    >
      {btnLabel}
    </Button>
  );
};
export default AddBtn;
