const codeBlock = document.getElementById("codeBlock")
const copyButton = document.getElementById("copier")

codeBlock.innerText = '<script src="https://unpkg.com/tachyonjs@1.0.0/tachyon.min.js" integrity="sha384-heQJwFpZJtRgNigl/AIBiJDMVXglsdy1NzLiOjjc9yo8qLqSiBFPKCzVRiSKHNa4" type="module" crossorigin defer></script>';

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
