import { h } from 'preact';
import { Link } from 'preact-router/match';
import Style from './style.css'; 
import Lamp from "../lamp";

const Header = () => (
	<header className={Style.header}>
		<h1>Rhodlib.me</h1>
		<Lamp/>
		<nav>
			<Link href="/">blog</Link>
			<Link href="/profile">access</Link>
		</nav>
	</header>
);

export default Header;
