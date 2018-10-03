import { h, Component } from "preact";
import InstagramEmbed from "react-instagram-embed";

export default class Instagram extends Component {
	render() {
		return (
			// <InstagramEmbed
			// 	url="https://instagram.com/p/BjIvOaWAUA_qnyyMBr0P8gjflD9eu82b1Y5JoY0/embed/"
			// 	maxWidth={320}
			// 	hideCaption={false}
			// 	containerTagName="div"
			// 	protocol=""
			// 	injectScript
			// 	onLoading={() => {}}
			// 	onSuccess={() => {}}
			// 	onAfterRender={() => {}}
			// 	onFailure={() => {}}
			// />
			<iframe
				width="320"
				height="440"
				src="http://instagram.com/p/BjIvOaWAUA_qnyyMBr0P8gjflD9eu82b1Y5JoY0/embed"
				frameborder="0"
			/>
		);
	}
}
