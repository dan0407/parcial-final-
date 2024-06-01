

import './screns/expot';
import { Screens } from "./types/trips";
import { appState } from './store/index';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if(this.shadowRoot) this.shadowRoot.innerHTML = ``
		switch (appState.screen) {

			// case Screens.DASHBOARD:
			// 	const dashboard = this.ownerDocument.createElement("app-dashboard");
			// 	this.shadowRoot?.appendChild(dashboard);
			// 	break;
			case Screens.ADD:
				const add = this.ownerDocument.createElement("app-add");
				this.shadowRoot?.appendChild(add);
				break;

				
            break;

        default:
            break;
		}
		
	
	}
}

customElements.define('app-container', AppContainer);