import * as components from './components/indexPadre.js'
class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' }); //Encapsular el codigo y
		// permitir que el DOM encuentre nuestra nueva clase
	}

	//Cuando el componente se carga en el DOM hace lo que le indiquemos
	connectedCallback() {
		this.render();
	}
	
	render() {
		this.shadowRoot.innerHTML = `
     		<task-list></task-list>
    
    `;
	}
}


customElements.define('app-container', AppContainer);