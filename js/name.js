function name() {
    var ime = window.prompt("Hello, what's your name?");
    if(ime) {
        $(".container .text h1 span").text(ime);
    } else {
        alert("You didn't enter your name.");
        name();
    }
}

name();

function namechange() {
    name();
}