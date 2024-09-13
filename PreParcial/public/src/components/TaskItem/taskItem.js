class TaskItem extends HTMLElement {
	static get observedAttributes() {
		return ['title', 'description', 'state'];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();

	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this.render()
		if (oldValue !== newValue) {
            this[propName] = propName === 'state' ? newValue === 'true' : newValue
            this.render()
        }
	}

	changeState(){
		this.state = !this.state
		this.render()
	}

	render() {
		this.shadowRoot.innerHTML = `

		<div class="task">
			<h4 >${this.title}</h4>
			<p>${this.description}</p>
			<p>${!this.state ? "Pendiente" : "Completada"}</p>
			<input type="checkbox" name="" ${this.state ? "checked": ""} id="checkbox">
		</div>
    `;

	const checkbox = this.shadowRoot.getElementById("checkbox")
	checkbox.addEventListener('click', ()=>{
		this.changeState()
		if (this.state) {
			this.shadowRoot.querySelector('.task').style.backgroundColor = 'green';
		}
	})
	}
}

customElements.define('task-item', TaskItem);
export default TaskItem;