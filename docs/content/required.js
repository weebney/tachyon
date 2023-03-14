const yesSpan = document.getElementById("yes");
const noSpan = document.getElementById("no");
const resultSpan = document.getElementById("result");
const timeSpan = document.getElementById("timeSpan");
const errorSpan = document.getElementById("error");
const clickMe = document.getElementById("clickMe");
const codep = document.getElementById("copyText");
const copier = document.getElementById("copier");

let startDate, startLast, endDate, count;

function startTimer() {
    startDate = new Date().getTime();
    count = 0
}

function endTimer() {
    endDate = new Date().getTime();
    if (count > 0 && endDate < startDate) {
        errorSpan.classList.remove("hidden");
        noSpan.classList.add("hidden")
        yesSpan.classList.add("hidden");
        timeSpan.classList.add("hidden");
        resultSpan.classList.add("hidden");
    } else {
        count++
        var time = endDate - startDate;
        resultSpan.classList.remove("hidden");
        timeSpan.classList.remove("hidden");
        timeSpan.innerText = (time - 50).toString() + "ms";
        if (time < 50) {
            noSpan.classList.remove("hidden");
        } else {
            yesSpan.classList.remove("hidden");
        }
    }
}

function removeText() {
    [noSpan, yesSpan, timeSpan, resultSpan, errorSpan].forEach(e => e.classList.add("hidden"));
    timeSpan.innerText = "";
}

clickMe.addEventListener("mouseover", startTimer);
clickMe.addEventListener("mouseout", removeText);
clickMe.addEventListener("touchstart", startTimer);
clickMe.addEventListener("touchend", removeText);
clickMe.addEventListener("click", endTimer);

async function toClipboard() {
    await navigator.clipboard.writeText(codep.innerText);
    copier.innerHTML = "<strong>Copied!</strong>";
    await new Promise(resolve => setTimeout(resolve, 1000));
    copier.innerHTML = "<strong>Click me to copy!</strong>";
}

copier.addEventListener("click", toClipboard);
