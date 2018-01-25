import { h, Component } from "preact";
import style from "./style.less";

export default class Card extends Component {
	render() {
		return (
			<div class={style.card}>
				<div class={style.title}>
					<img
						class={style.avatar}
						src="/assets/avatarvins.png"
						alt="Logo"
					/>
					<h1 class={style.position}>Vincent Hirtz</h1>
					<h3 class={style.name}>25 years old</h3>
					<h3 class={style.name}>Dev front</h3>
					<h3 class={style.name}>Rouen, France</h3>
					<div>
						<div class={style.code} />
					</div>
				</div>
			</div>
		);
	}
}
