import { modalType } from "../../varMap";
import style from "./header.module.css";
import { ReactComponent as IconPhone } from "../../icons/phone.svg";
import { ReactComponent as IconBurger } from "../../icons/burger.svg";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = ({ toggleUiType, toggleTheme }) => {
  let [isOpen, setIsOpen] = useState(false);

  const onHandleClick = (type) => {
    toggleUiType(type);
    setIsOpen(true);
  };

  return (
    <header className="container">
      <ul className={style.list}>
        <li className={style.sentence}>
          <HeaderItem
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleUiType={toggleUiType}
            toggleTheme={toggleTheme}
          />
        </li>
        <li className={style.sentence}>
          <button
            type="button"
            className={style.button_phone}
            onClick={() => onHandleClick(modalType.phone)}
          >
            <span className={style.icon}>
              <IconPhone />
            </span>
          </button>
        </li>
        <li className={style.sentence}>
          <button
            type="button"
            className={style.button_info}
            onClick={() => onHandleClick(modalType.info)}
          >
            <span className={style.icon}>
              <IconBurger />
            </span>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
