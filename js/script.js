document.querySelector('#size').addEventListener('input', () => {
    let resize = document.querySelector('#size').value;
    document.querySelector(".sizeText").style.fontSize = resize + "%";
    document.querySelector(".labelSize").innerHTML = resize + "%";
});