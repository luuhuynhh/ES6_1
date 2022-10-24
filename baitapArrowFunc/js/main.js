const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

/**
 * 1. Load danh sách ô màu lên UI
 * 2. Đổi màu ngôi nhà trong sự kiện onclick
 */

const resetActiveState = (btnColorList) => {
    for (let btn of btnColorList) {
        btn.classList.remove("active");
    }
}

const createBtnColor = (color, colorList) => {
    let activeInit = "";
    if (color === colorList[0]) {
        activeInit = "active";
    }
    let btn = document.createElement("button");
    btn.className = `color-button ${color} ${activeInit}`
    btn.onclick = function () {
        resetActiveState(document.querySelector("#colorContainer").children);
        document.querySelector("#house").className = `house ${color}`;
        this.classList.add("active");
    }
    return btn;
}

const createColorList = (colorList) => {
    const colorContainer = document.querySelector("#colorContainer");
    console.dir(colorContainer);
    for (let color of colorList) {
        let btnColor = createBtnColor(color, colorList);
        colorContainer.appendChild(btnColor);
    }
}

createColorList(colorList);

