import { h } from "preact";
import style from "./style.less";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/styles/hljs";

const codeString = "dfsdf";

export default () => {
	return (
		<div id="main">
			<div class={style.header}>
				<h1>Projets</h1>
				<h2>A subtitle for your page goes here</h2>
			</div>

			<div class={style.content}>
				<h2 class={style.contentSubhead}>Yeoman Generator</h2>
				<p>
					Dans le cadre de mon emploi actuel, création d'une automatisation de
					la création de fichiers de configuration pour un écosystème de la
					plateforme Côté Pro.{" "}
				</p>
				<SyntaxHighlighter language="javascript" style={monokai}>
					{codeString}
				</SyntaxHighlighter>
				<h2 class={style.contentSubhead}>Selenium</h2>
				<p>Projet avorté</p>

				<div class="pure-g">
					<div class="pure-u-1-4">
						<img
							class="pure-img-responsive"
							src="http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg"
							alt="Peyto Lake"
						/>
					</div>
					<div class="pure-u-1-4">
						<img
							class="pure-img-responsive"
							src="http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg"
							alt="Train"
						/>
					</div>
					<div class="pure-u-1-4">
						<img
							class="pure-img-responsive"
							src="http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg"
							alt="T-Shirt Store"
						/>
					</div>
					<div class="pure-u-1-4">
						<img
							class="pure-img-responsive"
							src="http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg"
							alt="Mountain"
						/>
					</div>
				</div>

				<h2 class={style.contentSubhead}>Try Resizing your Browser</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
};
