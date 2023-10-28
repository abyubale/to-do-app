import { useEffect, useState } from "react";
import Btn from "../Btn/Btn";
import Input from "../Input/Input";
import List from "../List/List";

const LS_TODO_KEY = "Todo";
const Todo = () => {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);
  const [userSearchedText, setUserSearchedText] = useState("");

  const btnClickHandler = () => {
    if (msg.trim().length) {
      setList([
        {
          msg: msg,
          copyMsg: msg,
          isDone: false,
          isEditing: false,
          isSearchBoxEmpty: false,
        },
        ...list,
      ]);
      setMsg("");
    }
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(LS_TODO_KEY)) || [];
    setList(items);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_TODO_KEY, JSON.stringify(list));
  }, [list]);

  const swapping = (startIndex, endIndex) => {
    const items = [...list];
    const temp = items[startIndex];
    items[startIndex] = items[endIndex];
    items[endIndex] = temp;
    setList(items);
  };

  const donebtnClickHandler = (index) => {
    const items = [...list];
    items[index].isDone = true;
    setList(items);
  };

  const deletBtnHandler = (index) => {
    const items = [...list];
    items.splice(index, 1);
    setList(items);
  };

  const editBtnHandler = (index) => {
    const items = [...list];
    items[index].isEditing = true;
    setList(items);
  };

  const cancelBtnHandler = (index) => {
    const items = [...list];
    items[index].isEditing = false;
    items[index].copyMsg = items[index].msg;
    setList(items);
  };

  const changeInputEditHandler = (index, data) => {
    const items = [...list];
    items[index].copyMsg = data;
    setList(items);
  };
  const saveBtnHandler = (index) => {
    const items = [...list];
    items[index].isEditing = false;
    items[index].msg = items[index].copyMsg;
    setList(items);
  };

  const clearAllListBtnHandler = () => {
    setList([]);
  };

  const removeAllDoneItems = () => {
    const items = [...list];
    const notDoneItems = items.filter((item) => item.isDone !== true);
    setList(notDoneItems);
  };

  const showSearchedItem = (data) => {
    const items = [...list];
    let searchedData;
    if (data) {
      searchedData = items.map((item) => {
        if (item.msg.includes(data)) {
          item.isSearchBoxEmpty = false;
        }
        if (!item.msg.includes(data)) {
          item.isSearchBoxEmpty = true;
        }
        return item;
      });
    }
    if (data === "") {
      searchedData = items.map((item) => {
        item.isSearchBoxEmpty = false;
        return item;
      });
    }
    setList(searchedData);
  };

  const disableReomveAllDoneBtn = () => {
    const items = [...list];
    const isDonePresent = items.some((item) => (item.isDone ? true : false));
    return !isDonePresent;
  };

  return (
    <>
      <Input
        msg={msg}
        changeHandler={(data) => {
          setMsg(data);
        }}
        enterPressed={btnClickHandler}
        placeHolder={"To add items type here"}
      />
      <Btn
        clickHandler={btnClickHandler}
        disabled={!msg.trim().length}
        btnLabel="Add to List"
      />
      <Btn
        btnLabel="Clear All List"
        clickHandler={clearAllListBtnHandler}
        disabled={!list.length || userSearchedText}
        isDeleteBtn={true}
        multiDeleteBtnLabel="Delete All"
        multiDeleteMsg="Are you sure want to delete all list items?"
      />
      <Btn
        btnLabel="Remove All Done Items"
        clickHandler={() => {
          removeAllDoneItems();
        }}
        isDeleteBtn={true}
        multiDeleteBtnLabel="Delete All"
        multiDeleteMsg="Are you sure want to delete all done items?"
        disabled={!list.length || userSearchedText || disableReomveAllDoneBtn()}
      />

      <div>
        <Input
          style={true}
          placeHolder={`search items`}
          changeHandler={(data) => {
            setUserSearchedText(data.trim());
            showSearchedItem(data.trim());
          }}
        />
      </div>
      <div className="mt-3">
        <List
          list={list}
          swapping={swapping}
          donebtnClickHandler={donebtnClickHandler}
          deletBtnHandler={deletBtnHandler}
          editBtnHandler={editBtnHandler}
          cancelBtnHandler={cancelBtnHandler}
          changeInputEditHandler={changeInputEditHandler}
          saveBtnHandler={saveBtnHandler}
          userSearchedText={userSearchedText}
        />
      </div>
    </>
  );
};

export default Todo;
