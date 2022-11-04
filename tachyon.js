window.onload = function () {
    applyEvents(); 
    mutationObserver.observe(document.body, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['href'],
    });
}

function applyEvents() {
    document.querySelectorAll('a').forEach(a => {
        a.addEventListener("mouseover", createPrefetch);
        a.addEventListener("mouseout", removePrefetch);
    });
}

var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
        applyEvents();
    });
});

var current = [];
var link;

function createPrefetch() {
    current.push(this.href);
    new Promise(resolve => setTimeout(resolve, 50)).then(() => {
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
    try  {
        link = document.getElementById(this.href)
        link.remove();
    } catch {
        return
    }
}