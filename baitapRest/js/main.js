const calcDTB = (...args) => {
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    return sum / args.length;
}

document.querySelector("#btnKhoi1").onclick = function () {
    let toan = Number(document.querySelector("#inpToan").value);
    let ly = Number(document.querySelector("#inpLy").value);
    let hoa = Number(document.querySelector("#inpHoa").value);

    document.querySelector("#tbKhoi1").innerHTML = calcDTB(toan, ly, hoa).toFixed(2);
}

document.querySelector("#btnKhoi2").onclick = function () {
    let van = Number(document.querySelector("#inpVan").value);
    let su = Number(document.querySelector("#inpSu").value);
    let dia = Number(document.querySelector("#inpDia").value);
    let english = Number(document.querySelector("#inpEnglish").value);

    document.querySelector("#tbKhoi2").innerHTML = calcDTB(van, su, dia, english).toFixed(2);
}