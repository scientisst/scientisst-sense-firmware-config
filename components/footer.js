placeholder = document.getElementById("footer");
placeholder.innerHTML = `
<footer class="py-3 d-flex flex-row justify-content-center">
  <div class="text-muted text-center ">
  This work was partially supported by the IT – Instituto de Telecomunicações under the grant UID/EEA/50008/2013 "SmartHeart"
  </div>
</footer>
`
$(document).ready(function () {
  var docHeight = $(window).height();
  var footerHeight = $('#footer').height();
  var footerTop = $('#footer').position().top + footerHeight;

  if (footerTop < docHeight)
    $('#footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
});