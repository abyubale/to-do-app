/* eslint-disable react/prop-types */
import Btn from "../Btn/Btn";
import Input from "../Input/Input";
import style from "./List.module.css";

// eslint-disable-next-line react/prop-types
const List = ({
  list,
  swapping,
  donebtnClickHandler,
  deletBtnHandler,
  editBtnHandler,
  cancelBtnHandler,
  changeInputEditHandler,
  saveBtnHandler,
  userSearchedText,
}) => {
  // eslint-disable-next-line react/prop-types

  const items = list.map((item, index) => (
    <li
      key={index}
      className={item.isDone ? `p-2 ${style.listDone}` : "p-2"}
      style={{
        display: `${item.isSearchBoxEmpty ? "none" : "block"}`,
      }}
    >
      {item.isEditing && (
        <>
          <Input
            msg={item.copyMsg}
            changeHandler={(data) => {
              changeInputEditHandler(index, data);
            }}
          />
          <Btn
            btnLabel="Save"
            clickHandler={() => {
              saveBtnHandler(index);
            }}
            disabled={!item.copyMsg.trim().length}
          />
          <Btn
            btnLabel="Cancel"
            clickHandler={() => {
              cancelBtnHandler(index);
            }}
          />
        </>
      )}
      {!item.isEditing && (
        <>
          {item.msg}
          <Btn
            btnLabel="Edit"
            clickHandler={() => {
              editBtnHandler(index);
            }}
          />
        </>
      )}
      <Btn
        btnLabel="UP"
        clickHandler={() => swapping(index, index - 1)}
        disabled={index === 0 || userSearchedText}
      />
      <Btn
        btnLabel="DOWN"
        clickHandler={() => swapping(index, index + 1)}
        // eslint-disable-next-line react/prop-types
        disabled={list.length - 1 === index || userSearchedText}
      />
      {item.isDone && (
        <Btn
          btnLabel="Delete"
          clickHandler={() => {
            deletBtnHandler(index);
          }}
          isDeleteBtn={true}
        />
      )}
      {!item.isDone && (
        <Btn
          btnLabel="Done"
          clickHandler={() => {
            donebtnClickHandler(index);
          }}
          disabled={item.isEditing}
        />
      )}
    </li>
  ));

  return (
    <>
      <ul className={style.list}>{items}</ul>
    </>
  );
};

export default List;
