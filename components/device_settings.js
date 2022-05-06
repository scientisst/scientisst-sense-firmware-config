const deviceSettings = document.createElement('template');
deviceSettings.innerHTML = `
<link rel="stylesheet" href="assets/css/bootstrap.css" />
<link rel="stylesheet" href="assets/css/style.css" />
<link rel="stylesheet" href="assets/css/toggle_button.css" />
<link rel="stylesheet" href="assets/css/text_input.css" />
<div id="device-settings" class="d-flex flex-column align-items-center">
<h3>SAMPLING RATE</h3>
<div class="text-input">
  <input
    type="number"
    class="input"
    min="1"
    max="16000"
    size="5"
  />
</div>
<div style="height: 16px"></div>
<div id="channels-selector">
<h3>CHANNELS</h3>
<div class="buttons-row d-flex flex-wrap justify-content-center align-items-center">
  <div class="toggle-button m-3">
    <input type="checkbox" id="ai1" checked />
    <label for="ai1">AI1</label>
  </div>
  <div class="toggle-button m-3">
    <input type="checkbox" id="ai2" checked />
    <label for="ai2">AI2</label>
  </div>
  <div class="toggle-button m-3">
    <input type="checkbox" id="ai3" checked />
    <label for="ai3">AI3</label>
  </div>
  <div class="toggle-button m-3">
    <input type="checkbox" id="ai4" checked />
    <label for="ai4">AI4</label>
  </div>
  <div class="toggle-button m-3">
    <input type="checkbox" id="ai5" checked />
    <label for="ai5">AI5</label>
  </div>
  <div class="toggle-button m-3">
    <input type="checkbox" id="ai6" checked />
    <label for="ai6">AI6</label>
  </div>
</div>
</div>
<div id="digital-channels">
  <h3>DIGITAL CHANNELS</h3>
  <div class="buttons-row d-flex flex-wrap justify-content-center align-items-center">
    <div class="toggle-button m-3">
      <input type="checkbox" id="o1"/>
      <label for="o1">O1</label>
    </div>
    <div class="toggle-button m-3">
      <input type="checkbox" id="o2" />
      <label for="o2">O2</label>
    </div>
  </div>
</div>
</div
<div style="height: 32px"></div>
  <div class="d-flex flex-column" id="form-buttons">
    <button class="button submit">Submit</button>
    <div class="d-flex flex-row"/>
      <a href="index.html" class="button flex-grow-1" >
        Back
      </a>
      <button class="button flex-grow-1">reset</button>
    </div>
  </div>
</div>
<br>
`;

class DeviceSettings extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(deviceSettings.content);
  }
}

customElements.define('device-settings', DeviceSettings);