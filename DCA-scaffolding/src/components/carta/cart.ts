import styles from './add.css';


export enum songsAttribute {
	'image' = 'image',
	'namealbun' = 'namealbun',
	'autor' = 'autor',
	'price' = 'price',
	'stock' = 'stock',
}

export default class card extends HTMLElement {
	image?: string;
	namealbun?: string;
	autor?: string;
	price?: string;
	stock?: string;



    static get observedAttributes() {
		const attrs: Record<songsAttribute, null> = {
			image: null,
			namealbun: null,
			autor: null,
			price: null,
			stock: null,
		};
		return Object.keys(attrs);
	}
    attributeChangedCallback(propname: songsAttribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propname) {
			default:
				this[propname] = newValue;
				break;
		}
		this.render();

	}
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

		render() {
			if (this.shadowRoot) {
				this.shadowRoot.innerHTML = `
			<section>
			<div>
			<img src="${this.image}">
			<b>${this.namealbun}</b>
			<p>${this.autor}</p>
			<p>Date added: ${this.price}</p>
			<p>Duration: ${this.stock}</p>
		</div>
		</section>
	`;
			}
			const cssProfile = this.ownerDocument.createElement('style');
			cssProfile.innerHTML = styles;
			this.shadowRoot?.appendChild(cssProfile);
		}
	}
customElements.define('my-card', card);
	

