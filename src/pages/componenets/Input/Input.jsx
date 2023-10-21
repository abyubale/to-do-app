// eslint-disable-next-line react/prop-types
const Input = ({ inputmsg, msg, enterPressed }) => {
  return (
    <input
      type="text"
      value={msg}
      onChange={(e) => {
        inputmsg(e.target.value);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") enterPressed();
      }}
    />
  );
};

export default Input;
