import style from "./main.module.css";
import { mainLinks } from "../../varMap";

const Main = () => {
  return (
    <section className="container">
      <div className={style.padding}>
        <ul className={style.list}>
          {mainLinks.map((link, id) => {
            return (
              <li key={id} className={style.sentence}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <span className={style.box}></span>
                  <span className={style.title}>{link.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Main;
