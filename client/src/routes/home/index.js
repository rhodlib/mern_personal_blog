import React from 'react';
import Style from './Home.module.css';
import Blogheader from "../../components/Blogheader";

const Home = () => (
	<div className={Style.home}>
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
