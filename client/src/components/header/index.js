import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Rhodlib.me</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Blog</Link>
			<Link activeClassName={style.active} href="/profile">Access</Link>
		</nav>
	</header>
);

export default Header;
