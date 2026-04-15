const input = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
document.qu
const maxLength = 50;
const defaultCounterColor = "#6b7280";

function updateCharacterCount() {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }

    const textLength = input.value.length;
    charCount.textContent = `Character Count: ${textLength}/50`;
    charCount.style.color = textLength === maxLength ? "red" : defaultCounterColor;
}

input.addEventListener("input", updateCharacterCount);
updateCharacterCount();
