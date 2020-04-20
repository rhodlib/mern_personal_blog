import { h } from 'preact';
import style from './style';
import Blogheader from "../../components/blogheader";

const Home = () => (
	<div class={style.home}>
		<button>
			<Blogheader/>
		</button>
		<button>
			<Blogheader/>
		</button>
		<button>
			<Blogheader/>
		</button>
		<button>
			<Blogheader/>
		</button>
	</div>
);

export default Home;
