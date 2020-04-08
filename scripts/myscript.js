window.onload = function() {

    /* ------------------------- 
    ----DOM elements creation--- 
    --------------------------- */

    var footer = document.createElement('footer');
    footer.setAttribute('id', 'author-id');
    //Returns the <body> element
    document.body.appendChild(footer);

    var footer_text = document.createElement('small');
    footer_text.innerHTML = "Zukhu © 2020";
    footer.appendChild(footer_text);



    /* ------------------------- 
    ---------Stylesheet--------- 
    --------------------------- */

    //Returns the <html> element
    document.documentElement.style.height = "100%";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";

    document.body.style.minHeight = "100%";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.backgroundColor = "black";

    footer.style.position = "absolute";
    footer.style.backgroundColor = "gray";
    footer.style.bottom = "0";
    footer.style.left = "0";
    footer.style.right = "0";
    footer.style.marginTop = "7vw";

    footer_text.style.fontSize = "5rem";
    footer_text.style.color = "white";
}