import * as components from "./components/indexPadre.js"

//Como crear un componente
class appContainer extends HTMLElement {

    constructor(){
        super ();
        this.attachShadow({mode: "open"});
    }

    connectedCallback (){
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <img src="" alt="">
            <Nav-container></Nav-container>
        `;
    }
    
};


customElements.define('app-container', appContainer);