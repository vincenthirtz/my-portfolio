import { h, Component } from "preact";
import { Timeline } from "react-twitter-widgets";
import Instagram from '../instagram/index';
import style from "./style.less";

export default class Card extends Component {
	render() {
		return (
			<div class={style.content}>
				<div class="pure-g">
					<div class="pure-u-1-2">
						<h2>QUI ?</h2>
						<p>
							Je suis développeur front au sein du Groupe La Poste dans une
							filiale de Docapost. Mes connaissances principales tournent autour
							de JavaScript et Node.js mais j'ai eu l'occasion de travailler
							avec différents langages comme: Java, Python, C#, PHP et de
							nombreux frameworks React.js et Vue.js.
						</p>
					</div>
					<div class="pure-u-1-2">
						<h2>POURQUOI ?</h2>
						<p>
							Ayant un intérêt certain pour les nouvelles technologies de
							l'information et de la communication, j’ai eu la chance de pouvoir
							faire des études qui m’ont permis de suivre le cursus qui me
							correspond le mieux. À force de travail et de motivation, j’ai pu
							intégrer une entreprise normande où je m'épanouis pleinement dans
							les missions qui me sont proposés au quotidien. Si je veux
							toujours en apprendre davantage sur l'évolution des technologies
							du web, l’envie de partager mon savoir acquis jusqu’à présent se
							fait de plus en plus grande.
						</p>
					</div>
				</div>
				<div class={style.line} />
				<div class="pure-g">
					<div class="pure-u-1-2">
						<Instagram url='https://instagram.com/p/fA9uwTtkSN/media/' />
					</div>
					
					<div class="pure-u-1-2">
						<div class={style.button}>
							<Timeline
								dataSource={{
									sourceType: "profile",
									screenName: "vincenthirtzspn"
								}}
								options={{
									username: "vincenthirtzspn",
									height: "900"
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
