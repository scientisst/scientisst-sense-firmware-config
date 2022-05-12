placeholder = document.getElementById("submit-buttons");
placeholder.innerHTML = `
<div style="height: 16px"></div>
<div class="d-flex flex-column" id="form-buttons">
  <button type="submit" class="button submit"
   id="submit">Submit</button>
  <div class="d-flex flex-row" />
  <a href="index.html" class="button flex-grow-1"> Back </a>
  <button class="button flex-grow-1">reset</button>
</div>
<br>
`