placeholder = document.getElementById("network-settings");
placeholder.innerHTML = `
<div id="network_settings" class="d-flex flex-column">
  <label for="ssid">
    <h3>Network SSID</h3>
  </label>
  <div class="text-input">
    <input
    id="ssid"
    name="ssid"
    class="input"
    required
    />
  </div>
  <label for="password">
    <h3>Network Password</h3>
  </label>
  <div class="text-input">
    <input
      name="password"
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
      name="host_ip"
      class="input"
      required
    />
  </div>
  <label for="port_number">
    <h3>Port Number</h3>
  </label>
  <div class="text-input">
    <input
      id="port_number"
      name="port_number"
      class="input"
      type="number"
      required
    />
  </div>
  </div>
</div>
`;
