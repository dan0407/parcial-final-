
import { addSongs, getSongs } from '../utils/firebaseConfig';
import { card } from '../components/export';

export class pageadd extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		this.loadSongs();
		const formElement = this.shadowRoot?.querySelector('form');
		if (formElement) {
			formElement.addEventListener('submit', this.handleSubmit.bind(this));
		}
	}

	async handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const songData = {
			namealbun: formData.get('title') as string,
			image: formData.get('image') as string,
			author: formData.get('author') as string,
			stock: formData.get('dateAdded') as string,
		
		};
		await addSongs(songData);

		const removeElement = this.shadowRoot?.querySelector('form');
		if (removeElement) {
			removeElement.reset();
		}

		this.loadSongs();
	}

	async loadSongs() {
		const saveSongs = await getSongs();

			saveSongs.forEach((albun) => {
				const songComponent = document.createElement('my-card') as card;
				songComponent.namealbun = albun.namealbun;
				songComponent.image = albun.image;
				songComponent.autor = albun.author;
				songComponent.price = albun.price;
				songComponent.stock = albun.stock;
                
				this.shadowRoot?.appendChild(songComponent);
			});
		}
        
	

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				
				<div class="app-container">
					<div class="title"><h1>products</h1></div>
					<div class = "form-create-albun">
						<form id="form-albun">
                        <input type="text" name="namealbun" placeholder="namealbun" required>
							<input type="text" name="author" placeholder="Author" required>
							<input type="numbre" name="price" placeholder="price" required>
							<input type="numbre" name="stock" placeholder="stock" required>
							<input type="text" name="image" placeholder="Image" required>
							<input type="submit" id="save-song" value="Save"/>
						</form>
					</div>
					<div class="list-songs"></div>
				</div>
      `;
		
		}
	}
}

customElements.define('app-add', pageadd);
