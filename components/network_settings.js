const networkSettings = document.createElement('template');
networkSettings.innerHTML = `
<link rel="stylesheet" href="assets/css/bootstrap.css" />
<link rel="stylesheet" href="assets/css/style.css" />
<link rel="stylesheet" href="assets/css/toggle_button.css" />
<link rel="stylesheet" href="assets/css/text_input.css" />
<link rel="stylesheet" href="assets/css/style.css" />

<div id="network-settings" class="d-flex flex-column">
  <label for="ssid">
    <h3>Network SSID</h3>
  </label>
  <div class="text-input">
    <input
    id="ssid"
      class="input"
    />
  </div>
  <label for="password">
    <h3>Network Password</h3>
  </label>
  <div class="text-input">
    <input
      type="password"
      id="password"
      class="input"
    />
  </div>
  <label for="host_ip">
    <h3>Host IP</h3>
  </label>
  <div class="text-input">
    <input
      id="host_ip"
      class="input"
    />
  </div>
  <label for="port_number">
    <h3>Port Number</h3>
  </label>
  <div class="text-input">
    <input
      id="port_number"
      class="input"
    />
  </div>
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