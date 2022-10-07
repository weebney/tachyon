window.onload = function () {
    applyEvents();
    mutationObserver.observe(document.body, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['href'],
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var current = [];

function createPrefetch() {
    current.push(this.href);
    sleep(50).then(() => {
        if (current.includes(this.href)) {
            const link = document.createElement('link');
            link.id = this.href;
            link.href = this.href;
            link.rel = 'prefetch';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
    });
}

function removePrefetch() {
    current.pop(this.href);
    if (document.getElementById(this.href) != null){
        const link = document.getElementById(this.href);
        link.remove();
    }
}

var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        applyEvents();
    });
});

function applyEvents() {
    document.querySelectorAll('a').forEach(a => {
        a.addEventListener("mouseover", createPrefetch);
        a.addEventListener("mouseout", removePrefetch);
    });
}