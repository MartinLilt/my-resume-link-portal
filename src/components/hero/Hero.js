import style from "./hero.module.css";
import { ReactComponent as IconArrow } from "../../icons/arrow.svg";
import HeroItem from "./HeroItem";

const Hero = ({ toggleUi, toggleTheme }) => {
  return (
    <section className="container">
      <div className={style.box}>
        <div className={style.position}>
          <HeroItem toggleUi={toggleUi} toggleTheme={toggleTheme} />
        </div>
        <span className={style.icon}>
          <IconArrow width="60px" height="25px" />
          <p>follow me</p>
        </span>
      </div>
    </section>
  );
};

export default Hero;
