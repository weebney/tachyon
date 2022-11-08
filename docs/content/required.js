window.addEventListener('load', function () {
    var yesSpan = document.getElementById("yes");
    var noSpan = document.getElementById("no");
    var resultSpan = document.getElementById("result");
    var timeSpan = document.getElementById("timeSpan");
    var errorSpan = document.getElementById("error");
    var clickMe = document.getElementById("clickMe");

    var startDate
    var startLast
    var endDate
    var count

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
            if (time - 50 >= 1000) {
                timeSpan.innerText = ((time - 50) / 1000 ).toString() + "s";
            } else {
            timeSpan.innerText = (time - 50).toString() + "ms";
            }
            if (time < 50) {
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

