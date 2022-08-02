import { contacts, docs } from "../../varMap";
import style from "./hero.module.css";
import styleContacts from "./heroContacts.module.css";
import styleInfo from "./heroInfo.module.css";

const HeroItem = ({ toggleUi, toggleTheme }) => {
  switch (toggleUi) {
    case "/phone": {
      return (
        <div className={styleContacts.box}>
          <p>click to</p>
          <div className={styleContacts.box_list}>
            <ul className={styleContacts.list}>
              {contacts.map((link, id) => {
                return (
                  <li key={id} className={styleContacts.sentence}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      on {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
    case "/info": {
      return (
        <div className={styleInfo.box}>
          <p>Check</p>
          <div className={styleInfo.box_list}>
            <ul className={styleInfo.list}>
              <li className={styleInfo.sentence}>
                <button type="button">my developer's cv</button>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    default: {
      return (
        <ul className={style.list}>
          <li className={style.sentence}>
            <p>Hi</p>
          </li>
          <li className={style.sentence}>
            <p>I'm</p>
          </li>
          <li className={style.sentence}>
            <p>
              Ma<span className={style.sentence_text_name}>rtin</span>
            </p>
          </li>
          <li className={style.sentence}>
            <p>
              <span className={style.sentence_text_job}>
                Your we<span className={style.sentence_text_el}></span>
              </span>
              b developer
            </p>
          </li>
        </ul>
      );
    }
  }
};

export default HeroItem;
