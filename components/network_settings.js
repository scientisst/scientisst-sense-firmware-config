const networkSettings = document.createElement('template');
networkSettings.innerHTML = `
<link rel="stylesheet" href="assets/css/bootstrap.css" />
<link rel="stylesheet" href="assets/css/style.css" />
<link rel="stylesheet" href="assets/css/toggle_button.css" />
<link rel="stylesheet" href="assets/css/text_input.css" />

<div id="network-settings" class="d-flex flex-column align-items-center">
<h3>Network SSID</h3>
<div class="text-input">
  <input
    class="input w-100"
    size="32"
  />
</div>
<h3>Network Password</h3>
<div class="text-input">
  <input
    class="input w-100"
    size="32"
  />
</div>
</div>
`;

class NetworkSettings extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(networkSettings.content);
  }
}

customElements.define('network-settings', NetworkSettings);