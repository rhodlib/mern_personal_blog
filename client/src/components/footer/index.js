import { h } from "preact";
import Style from "./style.css";

const Footer = () => (
  <footer className={Style.footer}>
    <ul>
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
    <p>Created by Rhodlib</p>
  </footer>
);

export default Footer;
