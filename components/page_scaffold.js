const pageScaffold = document.createElement('template');
pageScaffold.innerHTML = `
<link rel="stylesheet" href="assets/css/bootstrap.css" />
<link rel="stylesheet" href="assets/css/style.css" />
<div style="margin:auto;width:98vw;height:100vh;text-align:center">
  <div
  class="w-100 h-100 px-3 py-2 d-flex justify-content-start align-items-center flex-column"
  >
    <slot></slot>
  </div>
</div>
`;

class PageScaffold extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(pageScaffold.content);
  }
}

customElements.define('page-scaffold', PageScaffold);