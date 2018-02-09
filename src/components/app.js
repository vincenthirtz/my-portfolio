import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import Blog from './blog';
import Project from './project';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Blog path="/blog" />
					<Project path="/projets" />
					{/* <Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" /> */}
				</Router>
			</div>
		);
	}
}
