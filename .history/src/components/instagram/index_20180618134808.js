import { h, Component } from "preact";
import Instafeed from "instafeed.js";
import style from "./style.less";

export default class Instagram extends Component {
	const tutorialFeed = new Instafeed({
		get: "user",
		userId: "190487201",
		clientId: "2905d0e4960549c894d74a600cddbc49",
		accessToken: "190487201.ba4c844.107ae16db94e4cf1b65d89995683220b",
		resolution: "standard_resolution",
		sortBy: "most-recent",
		limit: 32,
		template:
			'<a class="animation" href="{{link}}"><img src="{{image}}" /></a>'
	});
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
