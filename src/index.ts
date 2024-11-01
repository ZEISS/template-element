export {}

declare global {
  interface Window {
    ExampleElement: typeof ExampleElement
  }
  interface HTMLElementTagNameMap {
    'example-element': ExampleElement
  }
}

class ExampleElement extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.textContent = 'Hello, World!'
  }
}

customElements.define('example-element', ExampleElement)
