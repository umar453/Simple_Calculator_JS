function insertnum(val) {
    document.getElementById('input').textContent += val;
    console.log(val);
    return val;
}

function equalto() {
    let input = document.getElementById('input').textContent;
    let output = eval(input);
    document.getElementById('input').textContent = output;
    return output;
}

function clr() {
    document.getElementById('input').textContent = "";
}

function del() {
    var v = document.getElementById('input').textContent;
    document.getElementById("input").textContent = v.substring(0, v.length - 1);
}