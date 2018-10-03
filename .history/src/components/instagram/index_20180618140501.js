import { h, Component } from "preact";
import InstagramEmbed from "react-instagram-embed";
import style from "./style.less";

const tutorialFeed = new Instafeed({
	get: "user",
	userId: "190487201",
	clientId: "2905d0e4960549c894d74a600cddbc49",
	accessToken: "190487201.ba4c844.107ae16db94e4cf1b65d89995683220b",
	resolution: "standard_resolution",
	sortBy: "most-recent",
	limit: 32,
	template: '<a class="animation" href="{{link}}"><img src="{{image}}" /></a>'
});

export default class Instagram extends Component {
	componentDidMount() {
		document.addEventListener("DOMContentLoaded", () => {
			tutorialFeed.run();
		});
	}

	componentWillUpdate() {
		document.addEventListener("DOMContentLoaded", () => {
			tutorialFeed.run();
		});
	}

	render() {
		return;
		<InstagramEmbed
			url="https://instagram.com/p/fA9uwTtkSN/media/"
			maxWidth={320}
			hideCaption={false}
			containerTagName="div"
			protocol=""
			injectScript
			onLoading={() => {}}
			onSuccess={() => {}}
			onAfterRender={() => {}}
			onFailure={() => {}}
		/>;
	}
}
