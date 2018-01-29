import { h, Component } from "preact";
import Instafeed from "instafeed.js";

export default class Instagram extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		document.addEventListener("DOMContentLoaded", function() {
			var tutorialFeed = new Instafeed({
				get: "user",
				userId: "190487201",
				clientId: "2905d0e4960549c894d74a600cddbc49",
				accessToken: "190487201.ba4c844.107ae16db94e4cf1b65d89995683220b",
				resolution: "standard_resolution",
				sortBy: "most-recent",
				limit: 9,
				template:
					'<a class="animation" href="{{link}}"><img src="{{image}}" /></a>'
			});

			tutorialFeed.run();
		});
	}

	render() {
		return <div id="instafeed" />;
	}
}
