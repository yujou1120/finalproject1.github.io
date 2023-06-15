const text = "在這個讓人精神混亂的世界裡，有五個種族，他們用不同的方式毀壞團體的和諧";
const textElement = document.querySelector('.typing-text');

let index = 0;

function typeWriter() {
    textElement.textContent += text[index];
    index++;

    if (index < text.length) {
        setTimeout(typeWriter, 150); // 调整每个字符的延迟时间
    }
}

typeWriter();
