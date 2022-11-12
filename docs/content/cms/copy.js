const codeBlock = document.getElementById("codeBlock")
const copyButton = document.getElementById("copier")

codeBlock.innerHTML = '&lt;script src=&quot;https://unpkg.com/tachyonjs@0.3.0/tachyon.min.js&quot; integrity=&quot;sha384-umSCiduUXC3WjlGsseGIEmhM6tRFPRIGLWINkZ/s7v/ql175CtYIh1c7C0SrUx3s&quot; type=&quot;module&quot; crossorigin data-tachyon defer&gt;&lt;/script&gt;'

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
