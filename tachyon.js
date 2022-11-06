window.onload = main;

const activeLinks = [];
var mouseOver = false;

function main() {
	document.querySelectorAll('a').forEach(addListeners);

	const mutationObserver = new MutationObserver(mutations => mutations.forEach(mutatedElement => mutatedElement.addedNodes.forEach(addListeners)));

	mutationObserver.observe(document.body, {
		childList: true,
		subtree: true
	});
}

function addListeners(element) {
	if (element.href != '') {
		element.addEventListener("mouseover", prefetchToggle.bind(element));
		element.addEventListener("mouseout", prefetchToggle.bind(element));
	}
}

function prefetchToggle() {
	mouseOver = !mouseOver;
	const href = this.href;
	const tagid = "tachyon:" + href;
	
	try {
		document.head.removeChild(document.getElementById(tagid));
		return
	} catch {
		setTimeout(() => {
			if (mouseOver) {
				const link = document.createElement('link');
				link.id = tagid;
				link.href = href;
				link.rel = 'prefetch';
				document.head.appendChild(link);
			}
		}, 50);
	}
}