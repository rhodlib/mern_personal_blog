import { h } from "preact";
import Style from "./style.css";
import nodejslogo from "../../assets/nodejslogo.png";

const Blogheader = () => (
  <div className={Style.headerContainer}>
		<div className={Style.imgContainer}>
			<img src={nodejslogo} alt="blog img"/>
		</div>
		<div className={Style.titleContainer}>
			<h1>Some article about NodeJS</h1>
			<p>subtitle about nodejs article - <span>4/6/1966</span></p>
		</div>
	</div>
);

export default Blogheader;
