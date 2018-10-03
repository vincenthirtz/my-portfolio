import { h, Component } from "preact";
import InstagramEmbed from "react-instagram-embed";
import style from "./style.less";

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
