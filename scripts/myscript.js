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

    //Wellcome message
    let wellMessage = document.createElement("div");
    wellMessage.setAttribute("id", "wellcome-message");
    wellMessage.innerHTML = "WELLCOME!";
    document.body.appendChild(wellMessage);

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
    document.body.style.overflow = "hidden";

    footer.style.position = "absolute";
    footer.style.backgroundColor = "gray";
    footer.style.bottom = "0";
    footer.style.left = "0";
    footer.style.right = "0";
    footer.style.marginTop = "7vw";

    footer_text.style.fontSize = "5rem";
    footer_text.style.color = "white";

    wellMessage.style.color = "white";
    wellMessage.style.fontSize = "0rem";
    wellMessage.style.position = "absolute";
    wellMessage.style.width = "100vw";
    wellMessage.style.marginLeft = "auto";
    wellMessage.style.marginRight = "auto";
    wellMessage.style.top = "50%";
    wellMessage.style.bottom = "50%";
    wellMessage.style.textAlign = "center";

    
    
    
    /* ------------------------- 
    ---------Animations--------- 
    --------------------------- */

    //Heartbeat animation function
    function heartBeat() {
        var elem = document.getElementById("wellcome-message");
        var id = setInterval(frame, 5);
        var size = 0;
        var count = 0;
        var direction = "increase";

        function frame() {
            if (direction == "increase") {
                size += 0.2;
                elem.style.fontSize = `${size}rem`;
                if(size >= 40) {
                    count++;
                    direction = "decrease";
                }
            } else if (direction == "decrease") {
                size -= 0.2;
                elem.style.fontSize = `${size}rem`;
                if(size <= 20) {
                    count++;
                    direction = "increase";
                }
            } else if (count >= 5) {
                clearInterval(id);
            }
        }
    }
    heartBeat();
}

