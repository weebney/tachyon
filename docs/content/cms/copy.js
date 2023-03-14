const codeBlock = document.getElementById("codeBlock")
const copyButton = document.getElementById("copier")

codeBlock.innerText = '<script src="https://unpkg.com/tachyonjs@1.1.1/tachyon.min.js" integrity="sha384-eAVplf5NYzHCSEB5NSZ5vabWAMYIb9Y2E4SKcU78UTIjukDs0tMxFQX0FLmBVYi8" type="module" crossorigin defer></script>';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toClipboard() {
    navigator.clipboard.writeText(codeBlock.innerText);
    copier.innerHTML = "<strong>Copied!</strong>";
    sleep(1000).then(() => {
        copier.innerHTML = "<strong>Click me to copy!</strong>";
    })
}

copyButton.addEventListener("click", toClipboard)
