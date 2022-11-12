window.addEventListener('load', function () {
    const yesSpan = document.getElementById("yes");
    const noSpan = document.getElementById("no");
    const resultSpan = document.getElementById("result");
    const timeSpan = document.getElementById("timeSpan");
    const errorSpan = document.getElementById("error");
    const clickMe = document.getElementById("clickMe");

    const onTouchDevice = !!window.TouchEvent

    let startDate
    let startLast
    let endDate
    let count

    function startTimer() {
        startDate = new Date().getTime();
        count = 0
        return
    }

    function endTimer() {
        endDate = new Date().getTime();
        startLast = startDate
        if ((startLast == startDate) & (count > 0)) {
            errorSpan.classList.remove("hidden");
            noSpan.classList.add("hidden")
            yesSpan.classList.add("hidden");
            timeSpan.classList.add("hidden");
            resultSpan.classList.add("hidden");
            return
        } else {
            count++
            var time = endDate - startDate;
            resultSpan.classList.remove("hidden");
            timeSpan.classList.remove("hidden");
            timeSpan.innerText = (time - 50).toString() + "ms";
            if (time < 50) {
                if (onTouchDevice) {
                    errorSpan.classList.remove("hidden");
                    errorSpan.innerText = "Tap again; switching to Touch Mode)";
                }
                noSpan.classList.remove("hidden");
            } else {
                yesSpan.classList.remove("hidden");
            }

        }
        return
    }

    function removeText() {
        noSpan.classList.add("hidden")
        yesSpan.classList.add("hidden");
        timeSpan.classList.add("hidden");
        resultSpan.classList.add("hidden");
        errorSpan.classList.add("hidden");
        timeSpan.innerText = "";
    }

    clickMe.addEventListener("mouseover", startTimer);
    clickMe.addEventListener("mouseout", removeText);
    clickMe.addEventListener("touchstart", startTimer);
    clickMe.addEventListener("touchend", removeText);
    clickMe.addEventListener("click", endTimer);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var codep = document.getElementById("copyText");
    var copier = document.getElementById("copier");
    copier.addEventListener("click", toClipboard);

    function toClipboard() {
        navigator.clipboard.writeText(codep.innerText);
        copier.innerHTML = "<strong>Copied!</strong>";
        sleep(1000).then(() => {
            copier.innerHTML = "<strong>Click me to copy!</strong>";
        });     

}});

