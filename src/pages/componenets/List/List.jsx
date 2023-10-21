import AddBtn from "../Addbtn/Addbtn";
import style from "./List.module.css";

// eslint-disable-next-line react/prop-types
const List = ({ list, swapping }) => {
  // eslint-disable-next-line react/prop-types
  const item = list.map((item, index) => (
    <li key={index}>
      {item}
      <AddBtn
        btnLabel="UP"
        clickHandler={() => swapping(index, index - 1)}
        disabled={index === 0}
      />
      <AddBtn
        btnLabel="DOWN"
        clickHandler={() => swapping(index, index + 1)}
        // eslint-disable-next-line react/prop-types
        disabled={list.length - 1 === index}
      />
      <AddBtn btnLabel="Done" />
    </li>
  ));

  return <ul className={style.list}>{item}</ul>;
};

export default List;
