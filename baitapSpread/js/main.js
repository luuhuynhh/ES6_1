const jumpText = (selector) => {
    let element = document.querySelector(selector);
    const text = element.innerHTML;
    const chars = [...text];
    let html = chars.reduce((content, char) => {
        return content += `
        <span>${char}</span>
        `
    }, '');
    element.innerHTML = html;
}

jumpText(".heading");