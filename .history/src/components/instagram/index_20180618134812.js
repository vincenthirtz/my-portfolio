import { h, Component } from "preact";
import Instafeed from "instafeed.js";
import style from "./style.less";

export default class Instagram extends Component {

	componentDidMount() {
		document.addEventListener("DOMContentLoaded", () => {
		

			tutorialFeed.run();
		});
	}

	componentWillUpdate() {
		tutorialFeed.run();
	}

	render() {
		return <div id="instafeed" class={style.photos} />;
	}
}
