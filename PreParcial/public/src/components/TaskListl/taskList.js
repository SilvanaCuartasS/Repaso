import '../TaskItem/taskItem.js'

class TaskList extends HTMLElement {
	static get observedAttributes() {
		return ['li'];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.tasks =  []
	
	}

	connectedCallback() {
		this.render();

		const btn = this.shadowRoot.querySelector('form')
		console.log(btn);
		

		const inputTitle = this.shadowRoot.getElementById('title')
		const inputDescription = this.shadowRoot.getElementById('description')

		btn.addEventListener('submit', (e) =>  {
			e.preventDefault()

			this.tasks.push({title: inputTitle.value, description: inputDescription.value, state: false})
			this.addTasks()
		})
	}

	addTasks() {
		this.tasks.forEach(task => {
			const tasksContainer = this.shadowRoot.querySelector('.container')
			tasksContainer.innerHTML += 
		`<li><task-item  title=${task.title} description=${task.description} state=${task.state}></task-item> </li>` 
		});
	}


	atributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
			 <h1>ADD TASK</h1>
    		<form action="">
				<input id="title" type="text" placeholder="escribe el titulo de tu tarea">
				<input id="description" type="text" placeholder="escribe la descripcion">
				<input id="hola" type="submit" value="agregar">
    		</form>
			<div class="container">
			
			</div>
    `;
	}
}

customElements.define('task-list', TaskList);
export default TaskList;