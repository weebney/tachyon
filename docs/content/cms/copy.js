const codeBlock = document.getElementById("codeBlock")
const copyButton = document.getElementById("copier")

codeBlock.innerHTML = '&lt;script src=&quot;https://unpkg.com/tachyonjs@0.3.0/tachyon.min.js&quot; integrity=&quot;sha384-IE6iBy2sYJkfNOmq6qCwTD+E4W7MntLKEGZ7ns6MbgNftCh2WRaSq3O5v9xCvNa1&quot; type=&quot;module&quot; crossorigin data-tachyon defer&gt;&lt;/script&gt;'

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
