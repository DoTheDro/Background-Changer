const bgBtn = document.querySelector('button');

bgBtn.addEventListener('click', (e) => {
    document.body.style.backgroundColor = `rgb(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`;
});

function generateNumber() {
    number = Math.floor((Math.random() * 255) + 1);
    return number;
}