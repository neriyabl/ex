var button = document.querySelectorAll("button")
button.onclick = function() {
    button.forEach(element => {
        element.innerText = 0
    });
    
}
