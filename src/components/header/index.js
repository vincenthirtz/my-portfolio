import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/projects">Projects</Link>
					<Link href="/work">Work</Link>
					<Link href="/blog">Blog</Link>
				</nav>
			</header>
		);
	}
}
