import { useEffect, useState } from "react";
import AddBtn from "../Addbtn/Addbtn";
import Input from "../Input/Input";
import List from "../List/List";

const LS_TODO_KEY = "Todo";
const Todo = () => {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  const btnClickHandler = () => {
    if (msg.trim().length) {
      setList([msg, ...list]);
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

  return (
    <>
      <Input
        msg={msg}
        inputmsg={(data) => {
          setMsg(data);
        }}
        enterPressed={btnClickHandler}
      />
      <AddBtn
        clickHandler={btnClickHandler}
        disabled={!msg.trim().length}
        btnLabel="Add to List"
      />
      <div className="mt-3">
        <List list={list} swapping={swapping} />
      </div>
    </>
  );
};

export default Todo;
