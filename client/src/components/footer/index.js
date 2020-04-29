import React from "react";
import Style from "./Footer.module.css";

const Footer = () => (
  <footer className={Style.footer}>
    <ul>
      <li>
        <a
          href="https://www.instagram.com/rhodlib_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/rhodlib"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://t.me/rhodlib"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </li>
      <li>
        <a
          href="https://github.com/rhodlib"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://bitbucket.org/rhodlib"
          target="_blank"
          rel="noopener noreferrer"
        >
          BitBucket
        </a>
      </li>
      <li>
        <a href="https://rhodlib.me" target="_blank" rel="noopener noreferrer">
          Website
        </a>
      </li>
    </ul>
    <p>Created by Rhodlib</p>
  </footer>
);

export default Footer;
