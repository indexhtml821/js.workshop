customElements.define('mi-tarjeta', class extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('tarjeta');
        const templateContent = template.content.cloneNode(true);

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateContent);

        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'style.css');
        shadowRoot.appendChild(style);
    }
});