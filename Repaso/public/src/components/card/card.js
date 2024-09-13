class Card extends HTMLElement {

    static get observedAttributes() {
        return ["img", "alt", "title", "icons"];
      }

    constructor(){
        super ();
        this.attachShadow({mode: "open"});
    }

    connectedCallback (){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
      }

    render() {
        this.shadowRoot.innerHTML = `
        
        <img src=${this.img} alt=${this.alt}>
        <h3>${this.title}</h3>

           `;
    }
    
};


customElements.define('Nav-container', Card);
export default Card;