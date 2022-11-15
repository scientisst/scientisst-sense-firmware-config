placeholder = document.getElementById("device-settings");

placeholder.innerHTML = `
<div
  id="device_settings"
  class="d-flex flex-column align-items-center"
>
  <!-- <h3>SAMPLING RATE</h3>
  <div class="text-input">
    <input id="samplingRate" name="samplingRate" value="1000" type="number" class="input" min="1" max="16000" size="5" required/>
  </div>
  <div style="height: 16px"></div>
  <div id="channels-selector">
    <h3>CHANNELS</h3>
    <input type="hidden" id="channels" name="channels" value="[1,2,3,4,5,6]" />
    <div
      class="buttons-row d-flex flex-wrap justify-content-center align-items-center"
    >
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
    <input type="hidden" id="digital_channels" name="digital_channels" value="[1,2,3,4,5,6]" />
    <div
      class="buttons-row d-flex flex-wrap justify-content-center align-items-center"
    >
      <div class="toggle-button m-3">
        <input type="checkbox" id="o1" />
        <label for="o1">O1</label>
      </div>
      <div class="toggle-button m-3">
        <input type="checkbox" id="o2" />
        <label for="o2">O2</label>
      </div>
    </div>
  </div> -->
</div>
`;