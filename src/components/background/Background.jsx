import style from "./background.module.css";

const Background = ({ children }) => {
  return <div className={style.image}>{children}</div>;
};

export default Background;
