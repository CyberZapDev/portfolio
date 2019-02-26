var options = {
  strings: ['window.<span class="prvi">location</span>.<span class="prvi">href</span> = <span class="treci">"home.html"</span>;'],
  typeSpeed: 100,
    loop: false,
}

var optionsmobile = {
  strings: ['Hello there!<br>Welcome to my Portfolio!'],
  typeSpeed: 150,
    loop: false,
}

var typed = new Typed(".code", options);
var mobiletyped = new Typed(".mobilecode", optionsmobile);