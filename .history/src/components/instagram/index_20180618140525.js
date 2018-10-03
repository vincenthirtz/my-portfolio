import { h, Component } from "preact";
import InstagramEmbed from "react-instagram-embed";
import style from "./style.less";

export default class Instagram extends Component {

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
