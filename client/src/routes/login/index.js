import { h } from 'preact';
import Style from './style';

const Login = () => (
	<div class={Style.login}>
		<form>
			<h2>Login</h2>
			<input placeholder="Email"/>
			<input placeholder="Password" type="password"/>
			<button type="submit">access</button>
		</form>
	</div>
);

export default Login;
