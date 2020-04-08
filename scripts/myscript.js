window.onload = function() {
    var footer = document.createElement('footer');
    footer.setAttribute('id', 'author-id');
    //Returns the <body> element
    document.body.appendChild(footer);

    var footer_text = document.createElement('small');
    footer_text.innerHTML = "Zukhu © 2020";
    footer.appendChild(footer_text);

}