import style from "./header.module.css";

const HeaderItem = ({ isOpen, setIsOpen, toggleUiType, toggleTheme }) => {
  const onHandleChange = () => {
    toggleUiType(null);
    setIsOpen(false);
  };

  return (
    <button type="button" onClick={isOpen ? onHandleChange : toggleTheme}>
      <ul className={style.list_logo}>
        <li className={style.sentence_logo}>
          <p>{isOpen ? "tap" : "my"}</p>
        </li>
        <li className={style.sentence_logo}>
          <p>{isOpen ? "to home" : "resume"}</p>
        </li>
        <li className={style.sentence_logo}>
          <p>
            {isOpen ? "dark" : "change"} <br /> Theme
          </p>
        </li>
      </ul>
    </button>
  );
};

export default HeaderItem;
