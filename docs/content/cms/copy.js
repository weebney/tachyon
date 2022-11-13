const codeBlock = document.getElementById("codeBlock")
const copyButton = document.getElementById("copier")

codeBlock.innerText = '<script src="https://unpkg.com/tachyonjs@0.3.0/tachyon.min.js" integrity="sha384-umSCiduUXC3WjlGsseGIEmhM6tRFPRIGLWINkZ/s7v/ql175CtYIh1c7C0SrUx3s" type="module" crossorigin data-tachyon defer></script>';

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
