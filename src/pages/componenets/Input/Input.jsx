/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
// import PropTypes from "prop-types";
import styles from "./Input.module.css";
const Input = ({
  // eslint-disable-next-line react/prop-types
  changeHandler,
  msg,
  enterPressed,
  style = false,
  placeHolder,
}) => {
  return (
    <input
      type="text"
      value={msg}
      onChange={(e) => changeHandler(e.target.value)}
      onKeyUp={(e) => e.key === "Enter" && enterPressed()}
      className={style ? `${styles.searchBox}` : "p-2"}
      placeholder={placeHolder}
    />
  );
};

// Input.propTypes = {
//   changeHandler: PropTypes.func,
//   msg: PropTypes.string,
//   enterPressed: PropTypes.func,
//   style: Boolean,
//   placeHolder: String,
// };

export default Input;
