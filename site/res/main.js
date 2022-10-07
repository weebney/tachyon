window.addEventListener('load', function () {
    var jsdelivr = document.getElementById("jsdelivr");
    var cdnjs = document.getElementById("cdnjs");
    var unpkg = document.getElementById("unpkg");

    var jsdelivrSpan = document.getElementById("jsdelivrSpan");
    var cdnjsSpan = document.getElementById("cdnjsSpan");
    var unpkgSpan = document.getElementById("unpkgSpan");

    var codep = document.getElementById("codep");
    var copier = document.getElementById("copier");
    copier.addEventListener("click", toClipboard);

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

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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


    jsdelivr.addEventListener("click", changeScript);
    cdnjs.addEventListener("click", changeScript);
    unpkg.addEventListener("click", changeScript);

});





function toClipboard() {
    navigator.clipboard.writeText(codep.innerText);
    console.log(navigator.clipboard.read());
}


// function triggered by a event listener that moves a div to the mouse position, adjusted by the scroll offset of the document body


function changeScript() {
    // nav
    jsdelivr.classList.remove("selected");
    cdnjs.classList.remove("selected");
    unpkg.classList.remove("selected");
    this.classList.add("selected");

    // code snippet
    jsdelivrSpan.classList.remove("show");
    cdnjsSpan.classList.remove("show");
    unpkgSpan.classList.remove("show");

    switch (this) {
        case jsdelivr:
            jsdelivrSpan.classList.add("show");
            break;

        case cdnjs:
            cdnjsSpan.classList.add("show");
            break;

        case unpkg:
            unpkgSpan.classList.add("show");
            break;
    }

}