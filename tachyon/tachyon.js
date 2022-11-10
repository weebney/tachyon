// tachyon.js 0.3.0 - @weebney - MIT License
const dataAttr = document.currentScript.dataset;
const whitelist = dataAttr.whitelist || false;
const waitTime = dataAttr.timer || 50;
let mouseOver = false;

function prefetchToggle() {
  mouseOver = !mouseOver;
  const { href } = this;
  const tagid = `tachyon:${href}`;

  try {
    document.head.removeChild(document.getElementById(tagid));
    return;
  } catch {
    setTimeout(() => {
      if (mouseOver) {
        const link = document.createElement('link');
        link.id = tagid;
        link.href = href;
        link.rel = 'prefetch';
        document.head.appendChild(link);
      }
    }, waitTime);
  }
}

function addListeners(element) {
  if (!element.href) {
    return;
  }

  function apply() {
    element.addEventListener('mouseover', prefetchToggle.bind(element));
    element.addEventListener('mouseout', prefetchToggle.bind(element));
  }

  const onList = typeof element.dataset.tachyon !== 'undefined';
  if (!whitelist && !onList) {
    apply();
  } else if (whitelist && onList) {
    apply();
  }
}

function main() {
  document.querySelectorAll('a').forEach(addListeners);
  const mutationObserver = new MutationObserver((mutations) => mutations
    .forEach((mutatedElement) => mutatedElement.addedNodes.forEach(addListeners)));
  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

window.onload = main;
