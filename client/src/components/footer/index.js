import { h } from "preact";
import style from "./style.css";

const Footer = () => (
  <footer class={style.footer}>
    <ul class={style.list}>
      <li>
        <a href="#">Instagram</a>
      </li>
      <li>
        <a href="#">Twitter</a>
      </li>
      <li>
        <a href="#">Telegram</a>
      </li>
      <li>
        <a href="#">Gmail</a>
      </li>
      <li>
        <a href="#">GitHub</a>
      </li>
      <li>
        <a href="#">BitBucket</a>
      </li>
      <li>
        <a href="#">Discord</a>
      </li>
      <li>
        <a href="#">Website</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
