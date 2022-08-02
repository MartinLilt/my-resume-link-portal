import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.container}>
      <a
        href="index.html"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <p className={style.link_text}>
          just
          <span>click</span>
          <span>
            to visit <br /> my website
          </span>
        </p>
      </a>
    </footer>
  );
};

export default Footer;
