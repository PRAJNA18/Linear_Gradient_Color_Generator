function generateGrad(){
    let dir = document.getElementById("Direction").value;
    let clr1 = document.getElementById("color1").value;
    let clr2 = document.getElementById("color2").value;
    let elem = document.body;
    elem.style.background = `linear-gradient(${dir}, ${clr1}, ${clr2})`;
    let txt = document.getElementById("txt");
    txt.value = `background: linear-gradient(${dir}, ${clr1}, ${clr2})`;
}

function randGrad(){
    let clr1 = document.getElementById("color1");
    let clr2 = document.getElementById("color2");
    clr1.value = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    clr2.value = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    generateGrad();
}

function copycode(){
    let txt = document.getElementById("txt");
    navigator.clipboard.writeText(txt.value);
    alert(`Copied the code: ${txt.value}`);
}
