let element = document.querySelector(".b");
function f1(){
    alert("OTPUSTI");
    element.style.backgroundColor = "black";
};

function f2(){
    element.style.backgroundColor = "pink";
}

function f3(){
    element.style.width = "1000px";
}

function f4(){
    element.style.width = "200px";
}

function f5(){
    let proc = 25;
    element.style.borderRadius = proc + "%";
    }

document.addEventListener('keydown', f1);
document.addEventListener('mouseover', f2);
document.addEventListener('click', f3);
document.addEventListener('mouseleave', f4);
document.addEventListener('dblclick', f5);

